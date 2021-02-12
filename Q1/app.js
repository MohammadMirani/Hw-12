const http = require('http');
const fs = require('fs');
const path =require('path')

http.createServer(function (req, res) {

    if (req.url === '/about'&& req.method==='GET'){
        
    res.write("Hello World");
    res.end()
    }
    else{
        res.write("Bad request");
        res.end();
    }


}).listen(5005)