const http = require('http');
const fs = require('fs');
const port = 3030;
const hostName = "127.0.0.1";


const handleReadFile = (statusCode, fileLocation, req, res) => {
    fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, {
            "Content-Type": "text/html"
        });
        res.write(data);
        res.end();
    });
}


const server = http.createServer((req, res) => {

    if (req.url == "/") {
        handleReadFile(200, "./home.html", req, res);
    } else if (req.url == "/about") {
        handleReadFile(200, "./about.html", req, res);
    } else if (req.url == "/contact") {
        handleReadFile(200, "./contact.html", req, res);
    } else {
        handleReadFile(404, "./error.html", req, res);
    }


});

server.listen(port, hostName, () => {
    console.log(`Server running form http://${hostName}:${port}`);
});