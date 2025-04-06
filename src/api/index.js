import axios from "./axiosInstance";

const shuffle = (array) => {
  const result = [...array];
  for (let i = 0; i < result.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const fetchPopularVideos = async (regionCode = "KR") => {
  const res = await axios.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 50,
      regionCode,
    },
  });

  return shuffle(res.data.items);
};

export const fetchChannelInfo = async (id) => {
  console.log(id);
  const res = await axios.get("/channels", {
    params: {
      part: "snippet,contentDetails,statistics",
      id,
    },
  });
  return res.data.items[0];
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

export const fetchCommentsByVideoId = async (videoId) => {
  const res = await axios.get("/commentThreads", {
    params: {
      part: "snippet,replies",
      videoId,
    },
  });
  return res.data.items;
};
