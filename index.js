const http = require("node:http");
const fs = require("node:fs");

const port = 5500;

function content(res, statusCode, message) {
  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.write(message);
  res.end();
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    content(res, 200, "This is the Home Page");
  } else if (req.url === "/about") {
    content(res, 200, "This is the About Page");
  } else if (req.url === "/contact") {
    content(res, 200, "This is the Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (error) => {
      if (error) {
        content(res, 400, "file write fail");
      } else {
        content(res, 200, "file write success");
      }
    });
  }
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
