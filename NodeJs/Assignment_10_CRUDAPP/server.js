const express = require("express");
const mysql = require('mysql2');
const app = express();
const bcrypt = require("bcryptjs")
require("dotenv").config();
const host = process.env.SERVERHOST;
const port = process.env.PORT;
app.use(express.json());
app.use("/",express.static("./public"));
const authenticate = require('./middlewares/authenticate');
const authorizeAdmin = require('./middlewares/adminAuth');
const authorizeUser = require('./middlewares/userAuth.js');
const jwt = require("jsonwebtoken");

const database = process.env.DATABASE;
var con = mysql.createConnection({
    host: process.env.DATABASEHOST,
    user: process.env.USER,
    password: process.env.PASSWORD
})

function createTable(tableName, callback) {
    con.query(`USE ${database}`, (err) => {
        if (err) return callback(err);

        con.query(`SHOW TABLES LIKE '${tableName}'`, (err, result) => {
            if (err) return callback(err);

            if (result.length === 0) {
                console.log(`Creating Table '${tableName}'`);

                let createTableQuery;
                let insertDataQuery;

                switch (tableName) {
                    case "users":
                        createTableQuery = `
                            CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    verification BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

                        `;
                        insertDataQuery = `
                            INSERT INTO users (name, username, email, phone, password, verification) VALUES
('John Doe', 'john_doe', 'john.doe@example.com', '1234567890', '$2b$10$ExU58e8T2r2/UbA1CqE7H.3hl6YPbTg6TosRX0xhkwL4n/SlDsYWC', TRUE),
('Jane Smith', 'jane_smith', 'jane.smith@example.com', '0987654321', '$2b$10$thCTyxw8Nl/Pqz47l5URCO2/wo2uxk25H/eFNBFBrEZT5dx3J4Sii', FALSE),
('Raunak Rajesh Shah', 'rs7', 'shahrrs2004@gmail.com', '07620880485', '$2a$10$2BCfHYrAJrMTyITWRLmawO4cC2CkXv2Z3FPzIdtBGjdtHSeKxETv6', 0);

                        `;
                        break;
                    case "admins":
                        createTableQuery = `
                            CREATE TABLE admins (
                                admin_id INT AUTO_INCREMENT PRIMARY KEY,
                                admin_name VARCHAR(50) NOT NULL UNIQUE,
                                email VARCHAR(100) NOT NULL UNIQUE,
                                password VARCHAR(255) NOT NULL,
                                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                            );
                        `;
                        insertDataQuery = `
                            INSERT INTO admins (admin_name, email, password) VALUES 
                            ('admin_1', 'admin1@example.com', 'hashed_password3'),
                            ('admin_2', 'admin2@example.com', 'hashed_password4'),
                            ('rs7','shahrrs2004@gmail.com','$2a$10$2BCfHYrAJrMTyITWRLmawO4cC2CkXv2Z3FPzIdtBGjdtHSeKxETv6');
                        `;
                        break;
                    case "items":
                        createTableQuery = `REATE TABLE items (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(255) NOT NULL,description TEXT NOT NULL,price DECIMAL(10, 2) NOT NULL,category VARCHAR(100) NOT NULL,quantity INT NOT NULL,brand VARCHAR(100) NOT NULL,weight VARCHAR(50),color VARCHAR(50),PRIMARY KEY (id));`;
                        insertDataQuery = `INSERT INTO items (name, description, price, category, quantity, brand, weight, color) VALUES('Smartphone','Flagship model with 6.7" AMOLED display, 256GB storage, and 5G connectivity.',74999.00,'Electronics',100,'Samsung','188g','Phantom Black'),('Wireless Earbuds','True wireless earbuds with noise cancellation and up to 20 hours of battery life.',19999.00,'Electronics',150,'Apple','5g','White'),('Bluetooth Speaker','Portable Bluetooth speaker with deep bass and water resistance.',8999.00,'Electronics',80,'JBL','450g','Black'),('Gaming Laptop','High-performance laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.',109999.00,'Electronics',50,'Dell','2.5kg','Alienware White'),('Smart Watch','Smartwatch with fitness tracking, heart rate monitor, and GPS.',14999.00,'Electronics',120,'Garmin','45g','Silver'),('Digital Camera','DSLR camera with 24.1 MP resolution and 18-55mm lens.',35999.00,'Electronics',40,'Canon','650g','Black');`;
                        break;
                    case "cart":
                        createTableQuery = `
                            CREATE TABLE cart (
                                id INT AUTO_INCREMENT PRIMARY KEY,
                                user_id INT NOT NULL,
                                item_id INT NOT NULL,
                                FOREIGN KEY (user_id) REFERENCES users(user_id),
                                FOREIGN KEY (item_id) REFERENCES items(id)
                            );
                        `;
                        insertDataQuery = `
                            INSERT INTO cart (user_id, item_id) VALUES
                            (1, 1),
                            (2, 3),
                            (3, 2);
                        `;
                        break;
                    default:
                        return callback(new Error(`Unknown table name: ${tableName}`));
                }

                con.query(createTableQuery, (err) => {
                    if (err) return callback(err);

                    if (insertDataQuery) {
                        con.query(insertDataQuery, (err) => {
                            if (err) {console.log(err);}
                            else console.log(`Sample data added to '${tableName}' table`);
                        });
                    }

                    console.log(`Table '${tableName}' created`);
                    callback();
                });
            } else {
                console.log(`${tableName} table found.`);
                callback();
            }
        });
    });
}
con.connect(async function(err){
    if(err) {console.error("error " + err);}
    else {
        console.log("Connected!");
        con.query(`SHOW DATABASES LIKE '${database}'`,function(err, result){
            if(err) throw err;
            if(result.length === 0){
                con.query(`CREATE DATABASE ${database}`,(err)=>{
                    if(err) {throw err;}
                    else {
                        console.log(`Database ${database} created`); 
                        createTable("users", () => {
                            createTable("admins", () => {
                                createTable("items", () => {
                                    createTable("cart", () => {
                                        console.log("Ready");
                                    });
                                });
                            });
                        })
                        
                    }
                })
            }else{
                console.log(`database ${database} found.`);
                createTable("users", () => {
                    createTable("admins", () => {
                        createTable("items", () => {
                            createTable("cart", () => {
                                console.log("Ready");
                            });
                        });
                    });
                })
            }
        })
    }
});


app.post('/login', (req, res) => {
    const { username, password, role } = req.body;

    con.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Database error.' });
        if (results.length === 0) return res.status(401).json({ success: false, message: 'Invalid username.' });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ success: false, message: 'Error comparing passwords.' });
            if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid password.' });

            const token = jwt.sign({ user_id: user.user_id, username: user.username, role: role }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({ success: true, message: 'Login successful', token: token, user_id: user.user_id, name: user.name });
        });
    });
});

app.post('/signup', async (req, res) => {
    const {name, username, email, phone, password} = req.body;
    con.query(`SELECT * FROM ${database}.users WHERE email = ?`, [email], (err, results) => {
        if (err) {console.log(err); return res.status(500).json({ success: false, message: 'Database error' });}
        if (results.length > 0) return res.status(400).json({ success: false, message: 'User already exists' });
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) { console.log(err); return res.status(500).json({ success: false, message: 'Error hashing password' });}
            con.query(`INSERT INTO ${database}.users (name, username, email, phone, password, verification) VALUES (?, ?, ?, ?, ?, ?)`, [name, username, email, phone, hashedPassword, 0], (err, results) => {
                if (err) return res.status(500).json({ success: false, message: 'Error creating user' });
                res.status(201).json({ success: true, message: 'User created successfully' });
            });
        });
    });
});

app.get('/items', authenticate, (req, res) => {
    const query = 'SELECT * from inventory.items';
    con.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'An error occurred while fetching users.' });
        }
        res.status(200).json(result);
    });
});

app.get('/items/:item_id', authenticate,(req, res) => {
    const item_id = req.params.item_id;
    if(isNaN(item_id)){
        res.status(400).json(`Please Enter a valid id`);
    }else{
        con.query(`SELECT * from ${database}.items WHERE id=${parseInt(item_id)}`, function (err, result){
            if(err) res.json({"Error": err});
            if(result.length <= 0){
                res.status(404).json(`No Records Found with id ${item_id}`)
            }else{
                res.status(200).json(result);
            }
        });
    }
});

app.get('/cart', authenticate, authorizeUser, (req, res) => {
    const userId = req.user.user_id;
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    const getCartItemsQuery = `
        SELECT id AS cart_id, item_id FROM cart WHERE user_id = ?;
    `;

    con.query(getCartItemsQuery, [userId], (err, cartItems) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to retrieve cart items' });
        }
        if (cartItems.length === 0) {
            return res.status(404).json({ message: 'No items found in the cart' });
        }
        const itemIds = cartItems.map(item => item.item_id);
        const getItemsQuery = `
            SELECT * FROM items WHERE id IN (?);
        `;
        con.query(getItemsQuery, [itemIds], (err, items) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to retrieve items' });
            }
            const cartResponse = cartItems.map(cartItem => {
                const itemDetails = items.find(item => item.id === cartItem.item_id);
                return {
                    cart_id: cartItem.cart_id,
                    item: itemDetails
                };
            });
            res.json({ cart: cartResponse });
        });
    });
});

app.post('/cart/:item_id', authenticate, authorizeUser, (req, res) => {
    const user_id = req.user.user_id;
    const { item_id } = req.params;
    if (!user_id || !item_id) {
        return res.status(400).json({ success: false, message: 'User ID and Item ID are required' });
    }
    const addCartItemQuery = `INSERT INTO cart (user_id, item_id) VALUES (?, ?)`;
    con.query(addCartItemQuery, [user_id, item_id], (err, result) => {
        if (err) {
            console.error('Error adding item to cart:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        res.status(200).json({ success: true, message: 'Item added to cart successfully' });
    });
});

app.delete('/cart/:cart_id', authenticate, authorizeUser, (req, res) => {
    const { cart_id } = req.params;
    if (!cart_id) {
        return res.status(400).json({ success: false, message: 'Cart ID is required' });
    }
    const deleteCartItemQuery = `DELETE FROM cart WHERE id = ?`;
    
    con.query(deleteCartItemQuery, [cart_id], (err, result) => {
        if (err) {
            console.error('Error deleting item from cart:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Cart item not found' });
        }

        res.status(200).json({ success: true, message: 'Item removed from cart successfully' });
    });
});


// Admin Controls

app.post('/items', authenticate, authorizeAdmin, async (req, res) => {
    const { name, desc, price, category, quantity, brand, weight, color } = req.body;
    con.query(`INSERT INTO ${database}.items (name, description, price, category, quantity, brand, weight, color) VALUES (?,?,?,?,?,?,?,?)`,[name, desc, price, category, quantity, brand, weight, color],(err)=>{
        if(err) {res.status(500).json({"Error": err}); console.log(err);}
        else res.status(201).json("Sucess");
    });
});

app.put('/items/:item_id', authenticate, authorizeAdmin, (req,res)=>{
    let data;
    const id = parseInt(req.params.item_id);
    if(isNaN(id)){
        res.status(400).json(`Please Enter a valid id`);
    }else{
        con.query(`SELECT * FROM ${database}.items WHERE id = ${id}`,(err,result) =>{
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
                con.query(`UPDATE ${database}.items SET name = ?, description = ?, price = ?, category = ?, quantity = ?, brand = ?, weight = ?, color = ? WHERE id = ?`,[name, desc, price, category, quantity, brand, weight, color, id],(err)=>{
                    if(err) res.status(500).json({"Error": err});
                    else res.status(200).json({"Sucess":[name, desc, price, category, quantity, brand, weight, color]});
                });
            }});
    }
})

app.delete('/items/:item_id', authenticate, authorizeAdmin, (req, res) => {
    const { item_id } = req.params;
    const query = `DELETE FROM ${database}.items WHERE id=?`;
    con.query(query, [item_id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'An error occurred while deleting the user.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found.' });
        }
        res.status(200).json({ message: 'Item deleted successfully!' });
    });
});

app.use('/admin', authenticate, authorizeAdmin, express.static('./public/admin'));

app.listen(port,()=>{
    console.log(`listening on http://${host}:${port}/`);
});
