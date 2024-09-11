let fs = require('fs').promises;
let path = require('path');
let http = require('http')
let port = 80;
let hostname = 'localhost';
const server = http.createServer();

server.on('request',async function(req,res){
    try{
        res.setHeader("Access-Control-Allow-Origin","*");
        res.setHeader("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
        res.setHeader("Content-Type","text/html");
        res.statusCode = 200;
        const filePath = path.join('lib','users.txt');
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n');
        let jsonData = {};
        const users = lines.map(line=>{
            const [name, age, gender, city] = line.split(' | ').map(item => item.trim());
            return {name: name, age:parseInt(age) || age, gender: gender, city: city};
        });
        jsonData = {...jsonData, users}
        let userdata = jsonData["users"].map(th=>{
            return `<tr style="border:1px solid"><td style="border:1px solid">${th["name"]}</td><td style="border:1px solid">${th["age"]}</td><td style="border:1px solid">${th["gender"]}</td><td style="border:1px solid">${th["city"]}</td></tr>`
            })
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1>User Data</h1><table style="border:1px solid">
${userdata.join('')}</table>
</body>
</html>`
        res.end(html);
    } catch(err){
        console.error("Error: ", err);
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server listening on http://${hostname}:${port}/`);
});