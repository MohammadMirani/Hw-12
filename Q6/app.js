const http = require('http');
const fs = require('fs')


http.createServer(function (request, response) {
    // root, get
    if (request.url === "/" && request.method === "GET") {
        fs.readFile('./public/index.html', 'utf8', (err, data) => {
            if(err) return console.log(err);
            response.write(data);
            response.end();
        })

    } else if (request.url === "/style.css" && request.method === "GET") {
        fs.readFile('./public/style.css', 'utf8', (err, data) => {
            if(err) return console.log(err);
            response.write(data);
            response.end();
        })
    }
    
    else if (request.url === "/main.js" && request.method === "GET") {
        fs.readFile('./public/main.js', 'utf8', (err, data) => {
            if(err) return console.log(err);
            response.write(data);
            response.end();
        })
    } 
    else if (request.url === "/Betta.png" && request.method === "GET") {
        response.setHeader('Content-Type', 'img/png')
        fs.readFile('./public/Betta.png', (err, data) => {
            if(err) return console.log(err);
            response.write(data);
            response.end();
        })
    } 
    else {
        response.write("Bad request");
        response.end();
    }


}).listen(5005);

console.log("Server started on 5005");

// http://localhost:5005/