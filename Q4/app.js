const http = require('http');

http.createServer(function (req, res) {

    if (req.url === '/' && req.method === 'GET') {
        res.write('<h1>Hello Web Aplication</h1>')
        console.log(req.url);
        res.end()
    } else if (req.url === '/about' && req.method === 'GET') {
        res.write('<h1>About Me</h1>')
        res.end()

    } else if (req.url === '/contact' && req.method === 'GET') {
        res.write('<h1>Contact Us</h1>')
        res.end()

    } else if (req.url === '/home' && req.method === 'GET') {
        res.write('<h1>Home Page</h1>')
        res.end()

    }
    else{
        res.write('<h1>Not Found</h1>')
        res.end();
    }

}).listen(5005)