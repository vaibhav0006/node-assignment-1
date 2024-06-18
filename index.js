const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${new Date().toLocaleDateString("en-GB")} : ${ req.url} New request received\n`;
  const myURL = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    if (err) {
      console.error("Error appending to log file:", err);
    }
    switch (myURL.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myURL.query.name;
        res.end(`Hi ${username}`);
        break;
      case "/contact":
        if (req.method === "GET") {
          res.end("ContactPage");
        }
        break;
      default:
        res.end("404 not found");
    }
  });
});

server.listen(5000, () => {
  console.log("Server Running on PORT 5000");
});
