export default ({ $axios }) => {
  $axios.onRequest(config => {
    config.headers = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Origin':  '*',
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'Content-Type': 'application/json',
    }
    console.log(config.headers);
  });
}
