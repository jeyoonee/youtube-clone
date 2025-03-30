import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API ERROR", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
