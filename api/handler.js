'use strict';

const client = require('cheerio-httpcli');

module.exports.slides = (event, context, callback) => {
  console.log(event)
  const url = event.queryStringParameters.url;

  const urls = url.split('/')

  client.fetch(url, null, function (err, $, res) {
    const id = $('.speakerdeck-embed')[0].attribs['data-id']

    client.fetch(`https://speakerdeck.com/player/${id}`, null, function (err, $, res) {
      const json = $('script')[3].children[0].data.match(/\{.*?\;/g)[0].slice(0, -1)
      console.log(json)
      const response = {
        statusCode: 200,
        body: json
      };
    
      callback(null, response);
    
    })
  })
};
