// Note: The Code will Automatically create the database and table if not present.
// Just Edit the host user and password which is at line number 10,11,12.
import express from "express";
import mysql from "mysql2";
const app = express();
const port = 5000;

// MiddleWare for Json
app.use(express.json());

// Edit These values as per your MySQL databse
const host = "localhost";
const user = "root";
const password = "root";
var con = mysql.createConnection({
    host: host,
    user: user,
    password: password
});


function createTable(){
    con.query("USE inventory", (err)=>{
        if (err) throw err;
        con.query("SHOW TABLES LIKE 'items'",(err,result)=>{
            if (err) throw err;
            if(result.length === 0){
                console.log("Creating Table 'items'");
                con.query("CREATE TABLE items (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(255) NOT NULL,description TEXT NOT NULL,price DECIMAL(10, 2) NOT NULL,category VARCHAR(100) NOT NULL,quantity INT NOT NULL,brand VARCHAR(100) NOT NULL,weight VARCHAR(50),color VARCHAR(50),PRIMARY KEY (id));",(err)=>{
                    if(err) throw err;
                    con.query(`INSERT INTO items (name, description, price, category, quantity, brand, weight, color) VALUES('Smartphone','Flagship model with 6.7" AMOLED display, 256GB storage, and 5G connectivity.',74999.00,'Electronics',100,'Samsung','188g','Phantom Black'),('Wireless Earbuds','True wireless earbuds with noise cancellation and up to 20 hours of battery life.',19999.00,'Electronics',150,'Apple','5g','White'),('Bluetooth Speaker','Portable Bluetooth speaker with deep bass and water resistance.',8999.00,'Electronics',80,'JBL','450g','Black'),('Gaming Laptop','High-performance laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.',109999.00,'Electronics',50,'Dell','2.5kg','Alienware White'),('Smart Watch','Smartwatch with fitness tracking, heart rate monitor, and GPS.',14999.00,'Electronics',120,'Garmin','45g','Silver'),('Digital Camera','DSLR camera with 24.1 MP resolution and 18-55mm lens.',35999.00,'Electronics',40,'Canon','650g','Black');`,(err)=>{if(err) {console.error(err)} else {console.log("Added Sample data");} });
                    console.log("Table 'items' Created");
                })
            }else{
                console.log("Table items found.");
            }
        });

    })
}

con.connect(async function(err){
    if(err) {console.error("error " + err);}
    else {
        console.log("Connected!");
        con.query("SHOW DATABASES LIKE 'inventory'",function(err, result){
            if(err) throw err;
            if(result.length === 0){
                con.query("CREATE DATABASE inventory",(err)=>{
                    if(err) throw err;
                    else console.log("Database 'inventory' created"); createTable();
                })
            }else{
                console.log('database inventory found.');
                createTable()
            }
        })
    }
});

// Get all items
app.get('/items',(req,res)=>{
    con.query(`SELECT * from inventory.items`, function (err, result){
        if(err) res.status(500).json({"Error": err});
        res.status(200).json(result);
    });
});

// Get a specific item with id
app.get('/items/:item_id',(req,res)=>{
    const item_id = req.params.item_id;
    if(isNaN(item_id)){
        res.status(400).json(`Please Enter a valid id`);
    }else{
        con.query(`SELECT * from inventory.items WHERE id=${parseInt(item_id)}`, function (err, result){
            if(err) res.json({"Error": err});
            if(result.length <= 0){
                res.status(404).json(`No Records Found with id ${item_id}`)
            }else{
                res.status(200).json(result);
            }
        });
    }
});

// Add a new item
app.post('/items',(req,res)=>{
    const name = req.body.name;
    const desc = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const quantity = req.body.quantity;
    const brand = req.body.brand;
    const weight = req.body.weight;
    const color = req.body.color;
    con.query(`INSERT INTO items (name, description, price, category, quantity, brand, weight, color) VALUES (?,?,?,?,?,?,?,?)`,[name, desc, price, category, quantity, brand, weight, color],(err)=>{
        if(err) res.statu(500).json({"Error": err});
        else res.status(201).json("Sucess");
    });
});

// Edit an existing item
app.put('/items/:item_id', (req,res)=>{
    let data;
    const id = parseInt(req.params.item_id);
    if(isNaN(id)){
        res.status(400).json(`Please Enter a valid id`);
    }else{
        con.query(`SELECT * FROM items WHERE id = ${id}`,(err,result) =>{
            if(err) res.status(500).json({"Error":err});
            else {
                data = result[0];
                console.log(data);
                const name = (req.body.name === undefined) ? data.name: req.body.name;
                const desc = (req.body.description === undefined) ? data.description: req.body.description;
                const price = (req.body.price === undefined) ? data.price: req.body.price;
                const category = (req.body.category === undefined) ? data.category: req.body.category;
                const quantity = (req.body.quantity === undefined) ? data.quantity: req.body.quantity;
                const brand = (req.body.brand === undefined) ? data.brand: req.body.brand;
                const weight = (req.body.weight === undefined) ? data.weight: req.body.weight;
                const color = (req.body.color === undefined) ? data.color: req.body.color;
                console.log(name, desc, price, category, quantity, brand, weight, color);
                con.query(`UPDATE items SET name = ?, description = ?, price = ?, category = ?, quantity = ?, brand = ?, weight = ?, color = ? WHERE id = ?`,[name, desc, price, category, quantity, brand, weight, color, id],(err)=>{
                    if(err) res.status(500).json({"Error": err});
                    else res.status(200).json({"Sucess":[name, desc, price, category, quantity, brand, weight, color]});
                });
            }});
    }
})

// Delete an item
app.delete('/items/:item_id', (req,res)=>{
    const id = req.params.item_id;
    if(isNaN(id)){
        res.status(400).json(`Please Enter a valid id`);
    }else{
        con.query(`DELETE FROM items WHERE id=?`,[id], function (err){
            if(err) res.status(500).json({"Error": err});
            res.status(200).json("Sucess");
        });
    }
})

app.listen(port, ()=>{
    console.log("listening on Port 5000");
});