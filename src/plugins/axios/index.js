import axios from "axios";

const instance = axios.create({
  // 8
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "full",
  },
});

export default instance;
