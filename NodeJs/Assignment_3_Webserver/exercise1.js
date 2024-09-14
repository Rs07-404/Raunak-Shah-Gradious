const fs = require("fs");
const path = require("path");
const http = require("http");
const port = 8080;
const hostname = 'localhost';
const server = http.createServer();
const filePath = path.join('lib','index.html');

server.on('request', async function(req,res){
    res.setHeader("Access-Control-ALlow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            console.error(err);
        }else{
            res.end(data);
        }
    });
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});