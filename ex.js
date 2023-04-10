const http = require("http");

const server = http.createServer((req, res) => {
    res.write('Hi NodeJS!');
    res.end();
}).listen(port=8080);