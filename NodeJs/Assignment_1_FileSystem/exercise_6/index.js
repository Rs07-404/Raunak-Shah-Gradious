const fs = require('fs').promises;
const path = require('path');

async function parsejson(fileName){
    const filePath = path.join('lib',fileName);
    const destinationPath = path.join('lib','users-info.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    const lines = jsonData.map(line=>{
        return `${line.name} | ${line.age} | ${line.gender} | ${line.city}`;
    });
    const userData = lines.join('\n');
    await fs.writeFile(destinationPath, 'name | age | gender | city\n'+userData, {encoding: 'utf8'});
    console.log('Data saved in lib/users-info.txt');
    console.log("Written Data: \n"+await fs.readFile(destinationPath, 'utf8'));
}

parsejson("data.json");