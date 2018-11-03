module.exports = function (config) {
  const http = require('http');
  const channel_numbers = [config.channel_number];
  const port = config.port;
  const hostname = config.hostname;

  let channels = {}
  channel_numbers.forEach((channel) => {
    channels[channel] = {
      broadcast_urls: [
        `rtmp:\/\/api.ustream.tv\/${channel}`
      ]
    }  
  })
  
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({channels: channels}));
  });
  
  server.listen(port, hostname, () => {
      console.log(`Server listening at http://${hostname}:${port}/`);
  });
}
