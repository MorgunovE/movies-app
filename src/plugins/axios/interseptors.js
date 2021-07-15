function setParams(config) {
  console.log(config);
  const params = config.params || {};
  config.params = Object.assign(
    params,
    {
      apikey: process.env.VUE_APP_API_KEY,
      plot: "full",
    }
  );
  return config;
}
export default function (axios) {
  axios.interceptors.request.use(setParams);
}
