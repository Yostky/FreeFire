import axios from "axios";
import { isTokenExpired } from "./jwtHelper";
axios.defaults.baseURL = "http://localhost:3000";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const refreshToken = async () => {
  try {
    const response = await axios.post("/api/v1/refresh_token");
    const { token } = response.data;
    localStorage.setItem("jwt", token);
    return token;
  } catch (error) {
    processQueue(error, null);
    isRefreshing = false;
    localStorage.removeItem("jwt");
    window.location.href = "/login";
    return null;
  }
};

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (token && isTokenExpired(token)) {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        })
        .catch((error) => {
          console.log("error");
          return Promise.reject(error);
        });
    } else {
      isRefreshing = true;
      const newToken = await refreshToken();
      processQueue(null, newToken);
      isRefreshing = false;
      if (newToken) {
        config.headers.Authorization = `Bearer ${newToken}`;
      }
    }
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url !== "/api/v1/refresh_token"
    ) {
      if (isRefreshing) {
        try {
          await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          });
          return axios(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      } else {
        isRefreshing = true;
        const newToken = await refreshToken();
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axios(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
