const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const port = 8080;
const app = express();
app.use('/',express.static('./public'));


app.get('/buddylist',async (req,res)=>{
    const data = await fs.readFile('./data/buddy-list.json','utf8');
    res.json(JSON.parse(data));
})

app.listen(port, ()=>{console.log(`Listening on http://localhost:${port}/`)});