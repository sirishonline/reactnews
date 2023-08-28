import axios from "axios";
// import { useHistory } from "react-router-dom";

import { removeStorage } from "../helpers/localStorage";
import { getErrorDescription } from "../helpers/Error";

const URL = "/";

export const authOptions = {
  withCredentials: true,
  crossdomain: true,
  headers: {
    "Content-Type": "application/json"
  }
};

const API = axios.create({
  baseURL: URL
});

const getAccessToken = () => {
  const tokenData = JSON.parse(localStorage.getItem("user") || "{}");
  return (tokenData || {}).token || null;
};

API.interceptors.request.use(
  config => {
    const configCopy = { ...config };
    const token = getAccessToken();
    configCopy.headers.Authorization = `Bearer ${token}`;
    return configCopy;
  },
  error => Promise.reject(error)
);

API.interceptors.response.use(
  res => Promise.resolve(res),
  err => {
    // toDo
    // const history = useHistory();
    if (err.response.status === 401) {
      removeStorage("user");
      window.location.href = "/";
      // history.push("/");
      // if (window.Auth) {
      //   return window.Auth.logout("/");
      // }
    }
    return Promise.reject(getErrorDescription(err));
  }
);
export default API;
