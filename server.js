const http = require('node:http');
const hostname = '0.0.0.0';
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({
    headers: req.headers,
    url: req.url,
  }));
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
