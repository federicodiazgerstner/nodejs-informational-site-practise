const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const parsed_url = url.parse(req.url, true);
    const path = parsed_url.pathname;

    if (path == "/") {
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "text/html" });
          return res.end("404 NO ha funcionado padre");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (path == "/about") {
      fs.readFile("about.html", (err, data) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "text/html" });
          return res.end("404 NO ha funcionado padre");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (path == "/contact-me") {
      fs.readFile("contact-me.html", (err, data) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "text/html" });
          return res.end("404 NO ha funcionado padre");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "text/html" });
          return res.end("404 NO ha funcionado padre");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
