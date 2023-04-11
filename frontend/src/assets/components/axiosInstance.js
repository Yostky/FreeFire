import axios from "axios";
import { isTokenExpired } from "./jwtHelper";

const refreshToken = async () => {
  try {
    const response = await axios.post("/api/v1/refresh_token");
    const { token } = response.data;
    localStorage.setItem("jwt", token);
    return token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("jwt");

  if (token && isTokenExpired(token)) {
    const newToken = await refreshToken();
    if (newToken) {
      config.headers.Authorization = `Bearer ${newToken}`;
    }
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
