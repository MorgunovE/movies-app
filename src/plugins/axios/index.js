import axios from "axios";
import interseptors from "./interseptors";

const instance = axios.create({
  // 8
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "full",
  },
});

interseptors(instance);

export default instance;
