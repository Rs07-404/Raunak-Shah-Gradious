let fs = require('fs').promises;
let path = require('path');

async function parseData(filename){
    try{
        const filePath = path.join('lib',filename);
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n');
        let jsonData = {};
        const users = lines.map(line=>{
            const [name, age, gender, city] = line.split(' | ').map(item => item.trim());
            return {name: name, age:parseInt(age), gender: gender, city: city};
        });
        jsonData = {...jsonData, users}
        dataJSON = JSON.stringify(jsonData, null, 2)
        fs.writeFile(path.join('lib','data.json'), dataJSON, {encoding: 'utf8'});
        console.log(dataJSON);
        console.log("The Json Data is Successfully Saved in " + "%clib/data.json","color: red");

    } catch(err){
        console.error("Error: ", err);
    }
}

parseData("data.txt");