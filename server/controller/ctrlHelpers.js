exports.genReqOptions = (uri) => {
  return {
    uri: uri,
    qs: {
      api_key: process.env.API_KEY
    },
    json: true
  }
};