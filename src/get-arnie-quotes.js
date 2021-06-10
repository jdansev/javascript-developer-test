
const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  return (await Promise.all(urls.map(url => httpGet(url))))
    .map(response => ({
      [`${response.status == 200 ? 'Arnie Quote' : 'FAILURE'}`]: JSON.parse(response.body).message
    }));
};

module.exports = {
  getArnieQuotes,
};

