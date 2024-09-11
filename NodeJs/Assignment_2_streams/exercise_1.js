const fs = require("fs");
const path = require("path");
const http = require("http");

const port = 8080;
const hostname = 'localhost';
const server = http.createServer();
const filePath = path.join('lib','sample.txt')

server.on('request', function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;

    let stream = true;
    if(stream){
        stream = fs.createReadStream(filePath);
        stream.on('data', function(data){
            const chunk = data.toString();
            console.log(chunk);
        })
        stream.pipe(res);
    }else{
        fs.readFile(filePath, 'utf8',(err, data)=>{
            if(err){
                console.error(err);
            }else{
                console.log('File-Content', data);
                res.end(data);
            }
        });
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})