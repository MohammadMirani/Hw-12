const http = require('http');
const fs = require('fs');
const user = require('./public/main.js')

console.log(user);

http.createServer(function (request, response) {
    // root, get
    if (request.url === "/" && request.method === "GET") {
        fs.readFile('./public/index.html', 'utf8', (err, data) => {
            if (err) return console.log(err);
            response.write(data);
            response.end();
        })

    } else if (request.url === "/style.css" && request.method === "GET") {
        fs.readFile('./public/style.css', 'utf8', (err, data) => {
            if (err) return console.log(err);
            response.write(data);
            response.end();
        })
    } else if (request.url === "/main.js" && request.method === "GET") {
        fs.readFile('./public/main.js', (err, data) => {
            if (err) return console.log(err);
            response.write(data);
            response.end();
        })
    } else if (request.url === "/assets/back.jpg" && request.method === "GET") {
        response.setHeader('Content-Type', 'img/jpg')
        fs.readFile('./public/assets/back.jpg', (err, data) => {
            response.write(data);
            response.end();
        })
    }
    // else if (request.url === "/assets/Iranian%20Sans.ttf" && request.method === "GET") {
    //     response.setHeader('Content-Type', 'font/ttf')
    //     fs.readFile('./public/assets/Iranian%20Sans.ttf', (err, data) => {
    //         response.write(data);
    //         response.end();
    //     })
    // }
     else {
        response.write("Bad request");
        response.end();
    }


    // $.ajax({
    //     method: "GET",
    //     url: "http://localhost:5005/",
    //     data: {
    //         userName,
    //         passWord
    //     },
    //     success: function (result) {
    //         console.log(result);
    //     }
    // })


}).listen(2000);




console.log("Server started on 2000");

// http://localhost:5005/