export default ({ $axios }) => {
  $axios.onRequest(config => {
    // config.withCredentials = false
    config.headers = {
      crossorigin: true
    }
    // console.log(config.headers);
  });
}
