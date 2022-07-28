const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    console.log('Request!', req.url);
    //const { pathname } = url.parse(req.url);
    const pathname = url.parse(req.url).pathname;
    
    if( pathname === '/') {
        res.statusCode = 200;
        res.end('<h1>Hight TITLE</h1>');
    } else if( pathname === '/tren') {
        res.statusCode = 200;
        res.end('<h2>My trening</h2>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Not found!!!</h1>');    
    }
    
}).listen(3000);