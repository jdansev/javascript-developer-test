
const { httpGet } = require('./mock-http-interface');

// Parse the results into expected object format
const parseResponse = r => {
  return {
    [`${r.status == 200 ? 'Arnie Quote' : 'FAILURE'}`]: JSON.parse(r.body).message
  };
}

// Request in parallel and combine results
const getArnieQuotes = async (urls) => {
  return (await Promise.all(urls.map(url => httpGet(url))))
    .map(parseResponse); 
};

module.exports = {
  getArnieQuotes,
};

