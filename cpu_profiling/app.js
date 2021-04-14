const http = require('http');
const httpServer = http.createServer();

httpServer.on('request', (req, res) => {
  let f = finonacci(40);
  return res.end('' + f);
})

function finonacci(n) {
  return (n < 2 ? n : finonacci(n - 1) + finonacci(n - 2));
}

httpServer.listen(3000);