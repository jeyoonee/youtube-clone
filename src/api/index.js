import axios from "./axiosInstance";

export const fetchPopularVideos = async (regionCode = "KR") => {
  const res = await axios.get("/videos", {
    params: {
      part: "snippet%2CcontentDetails%2Cstatistics",
      chart: "mostPopular",
      maxResults: 25,
      regionCode,
    },
  });
  return res.data.items;
};

export const fetchVideosByKeyword = async (keyword) => {
  const res = await axios.get("/search", {
    params: {
      part: "snippet",
      maxResults: 25,
      q: keyword,
    },
  });
  return res.data.items;
};

export const fetchVideoById = async (videoId) => {
  const res = await axios.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      id: videoId,
    },
  });

  return res.data.items[0];
};
