import http from "http";
import fs from "fs";
import path from "path";

const fileExtensions = {
  css: "text/css",
  js: "text/javascript",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpg",
  wav: "audio/wav",
};

var __dirname = path.resolve();
console.log(__dirname);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } 
  else if (req.url.match(".css$")) {
    let cssPath = path.join(__dirname, req.url);
    let fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  }
  else if (req.url.match(".js$")) {
    let jsPath = path.join(__dirname, req.url);
    let fileStreamJS = fs.createReadStream(jsPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/js" });
    fileStreamJS.pipe(res);
  }
  else if (req.url.match(".png$")) {
    var imagePath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  }
});
server.listen(5000);
