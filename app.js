const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);
console.log(`you're listening on the port http://localhost:3000`);
