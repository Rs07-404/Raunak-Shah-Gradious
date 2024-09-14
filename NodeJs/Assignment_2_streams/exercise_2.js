const fs = require("fs");
const path = require("path");
const http = require("http");

const port = 8080;
const hostname = 'localhost';
const server = http.createServer();
const filePath = path.join('lib','sample.exe')
const destinationPath = path.join('lib', 'gradious-assignment.exe')

server.on('request', function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;

    let stream = true;
    if(stream){
        const readStream = fs.createReadStream(filePath);
        const writeStream = fs.createWriteStream(destinationPath)
        
        readStream.pipe(writeStream);
        readStream.on('data',(data)=>{
            console.log(`Reading ${data.length} bytes`);
        })

        writeStream.on('finish',()=>{
            console.log("Finished Writing to the destination file.");
            res.end("Finished Writing to the destination file.")
        })

        //error
        readStream.on('error', (err)=>{
            console.error('Error reading the source file: ',err)
        })

        writeStream.on('error', (err)=>{
            console.error('Error writing to the destination file: ',err)
        })
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