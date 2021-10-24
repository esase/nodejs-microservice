
var http = require('http');

var server = http.createServer(function (req, res) { 
    if (req.url == '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write('[{"id": 1, "name": "Alex"}, {"id": 2, "name": "Ivan"}]');
        res.end();

        return;
    }

    if (req.url == '/news') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write('[{"id": 1, "title": "Test news 1"}, {"id": 2, "title": "Test news 2"}]');
        res.end();

        return;
    }

    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('Invalid Request!');
});

server.listen(8080);

console.log('Node.js web server at port 8080 is running..')