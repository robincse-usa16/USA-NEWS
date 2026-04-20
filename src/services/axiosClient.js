import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err?.response?.data || err.message);
    return Promise.reject(err);
  },
);

export default axiosClient;
