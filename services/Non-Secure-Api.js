import axios from "axios";

import { getErrorDescription } from "../helpers/Error";

const URL = "/";

const NS_API = axios.create({
  baseURL: URL
});

NS_API.interceptors.response.use(undefined, err => {
  const nsVHError = getErrorDescription(err);
  return Promise.reject(nsVHError);
});

export default NS_API;
