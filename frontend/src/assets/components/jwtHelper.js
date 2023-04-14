export const isTokenExpired = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const jsonPayload = JSON.parse(window.atob(base64));
    const exp = jsonPayload.exp;

    if (!exp) {
      return true;
    }

    const currentTime = Date.now() / 1000;
    return exp < currentTime;
  } catch (error) {
    return true;
  }
};
