// write your code here
const http = require("http");
require('dotenv').config();

const server = http.createServer((req, res) => {
  res.writeHead(418, { "Content-Type": "text/plain" });
  res.write("YOLO");
  res.end();
});

server.listen(process.env.PUBLIC_PORT, () => {
  console.log(`Ready to take requests on port: ${process.env.PUBLIC_PORT}`);
});
