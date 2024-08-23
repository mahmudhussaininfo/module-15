const http = require("http");
const colors = require("colors");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is Home page</h1>");
  }
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is the About Page</h1>");
  }
  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is the Contact Page</h1>");
  }

  //file write
  if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", function (error) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("error file");
        res.end();
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.end("<h2>file created successfully done</h2>");
      }
    });
  }
});

server.listen(5500, () => {
  console.log("server is running on port 5500".bgCyan.black);
});
