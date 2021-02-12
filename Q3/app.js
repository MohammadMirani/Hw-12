const http = require('http');

http.createServer(function (req, res) {

    console.log(req.url);
    res.write(req.url)
    res.end()
}).listen(5005)