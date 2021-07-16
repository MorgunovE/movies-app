function setParams(config) {
  // console.log(config);
  const params = config.params || {};
  config.params = Object.assign(params, {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "full",
  });
  return config;
}
// 19-1
function returnData(res) {
  // console.log(res);
  return res.data;
}
export default function (axios) {
  axios.interceptors.request.use(setParams);
  // 19
  axios.interceptors.response.use(returnData);
}
