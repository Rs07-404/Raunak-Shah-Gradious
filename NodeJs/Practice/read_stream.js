var fs = require("fs");
const http = require('http');
var stream, server, hostname = 'localhost', port = 8080;

server = http.createServer();

server.on('request',function(req, res){
    res.end("This is Port 8080");
});

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})