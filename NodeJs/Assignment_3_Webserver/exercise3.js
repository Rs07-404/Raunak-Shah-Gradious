const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const url = require('url')
const port = 8080;
const hostname = 'localhost';
const server = http.createServer();


server.on('request',async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Controll-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader("Content-Type","text/html")
    res.statusCode = 200;
    const pathname = url.parse(req.url, true).pathname;
    if(pathname === "/") {
        res.end(await fs.readFile(path.join('lib','home.html')), 'utf8');
    }else if(pathname === "/home") {
        res.end(await fs.readFile(path.join('lib','home.html')), 'utf8');
    }else if(pathname === "/about") {
        res.end(await fs.readFile(path.join('lib','about.html')), 'utf8');
    }else if(pathname === "/contact") {
        res.end(await fs.readFile(path.join('lib','contact.html')), 'utf8');
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server listening on http://${hostname}:${port}/`)
});