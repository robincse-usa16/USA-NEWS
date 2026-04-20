import axiosClient from "./axiosClient";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// Top headlines by category
export const getTopHeadlines = async (category = "general") => {
  const { data } = await axiosClient.get("/top-headlines", {
    params: {
      apiKey: API_KEY,
      country: "us",
      category,
      pageSize: 20,
    },
  });
  return data.articles || [];
};

// Search (for hero / trending)
export const searchNews = async (query = "world") => {
  const { data } = await axiosClient.get("/everything", {
    params: {
      apiKey: API_KEY,
      q: query,
      sortBy: "publishedAt",
      language: "en",
      pageSize: 20,
    },
  });
  return data.articles || [];
};
