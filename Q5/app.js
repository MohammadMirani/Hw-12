const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    if(req.url === '/' && req.method ==='GET'){
        fs.readFile('./public/index.html', 'utf8',(err,data)=>{
            console.log(data);
            res.write(data)
            res.end();

        })
    }
}).listen(5005)