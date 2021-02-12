const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer(function (req, res) {
    
    if (req.url === '/user' && req.method === 'GET') {
        fs.readFile('./public/data.json', 'utf8', (err, data) => {
            res.write(data);
            res.end();
        })

    } else {
        res.write("Bad request");
        res.end();
    }


}).listen(5005)