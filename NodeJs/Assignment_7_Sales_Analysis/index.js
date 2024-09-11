// ASGN2238 Raunak Shah
// Endpoints for localhost with port 5000
// • http://localhost:5000/sales/percentage-change
// • http://localhost:5000/sales/highest-business-date
// • http://localhost:5000/sales/business-improvement
// • http://localhost:5000/sales/percentage-change-wholesale
// • http://localhost:5000/sales/customers

import express from "express";
import {promises as fs} from "fs";
import path from "path";
const app = express();
const port = 5000;

async function parsejson(fileName){
    const filePath = path.join('lib',fileName);
    const destinationPath = path.join('lib','users-info.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
}

console.log("Reading Data");
const orders = await parsejson("order.json");
const address = await parsejson("address.json");
console.log("Data Ready");

function getWeekBusiness(data){
    let order_map = {};
    const startDate = new Date(Math.min(...data.map(order => new Date(order.OrderDate.split('-').reverse().join('-')))));
    orders.forEach(order => {
        const date = new Date(order.OrderDate.split('-').reverse().join('-'));
        const week_number = Math.ceil(((Math.floor((date - startDate))/86400000) + 1) / 7);
        order_map[week_number] = (order_map[week_number] >= 0)?order_map[week_number] + parseFloat(order.OrderAmount):parseFloat(order.OrderAmount);
    });
    return Object.keys(order_map).map(week => order_map[week]);
}

function getWeekBusinessChange(amounts){
    let result = {};
    for(let i = 0; i < amounts.length; i++){
        if(i == amounts.length - 1){
            break;
        }
        let from_week = amounts[i];
        let to_week = amounts[i+1];
        const change = (((to_week - from_week )/from_week)*100).toFixed(2);
        result[`week${i+1}_to_week${i+2}`] = `${(change<0)?'':'+'}${change}%`
    }
    return result;
}

// Percentage change in business between each week
app.get('/sales/percentage-change',(req, res)=>{
    let amounts = getWeekBusiness(orders);
    let result = getWeekBusinessChange(amounts);
    res.status(200).json(result);
});

// The date when we did the highest business
app.get('/sales/highest-business-date',(req, res)=>{
    let max_date = "";
    let max_amount = 0;
    orders.forEach(order => {
        if(order.OrderAmount > max_amount){
            max_amount = order.OrderAmount;
            max_date = order.OrderDate;
        }
    });
    res.status(200).json({'Date': max_date});
});

// Has the business improved week after week ?
app.get('/sales/business-improvement',(req, res)=>{
    let amounts = getWeekBusiness(orders);
    let result = {};
    for(let i = 0; i < amounts.length; i++){
        result[`week${i+1}`] = amounts[i];
    }
    result["improvement"] = (amounts[amounts.length-1] > amounts[0])?true:false
    res.status(200).json(result);
});

// Percentage change in wholesale business between each week
app.get('/sales/percentage-change-wholesale',(req, res)=>{
    const wholesale_orders = orders.filter(order => order.TypeOfOrder === "Wholesale");
    let amounts = getWeekBusiness(wholesale_orders)
    let result = getWeekBusinessChange(amounts);
    res.status(200).json(result);
});

// List the Unique Customer and address along with the total order value
app.get('/sales/customers',(req, res)=>{
    const result = []
    address.forEach(customer => {
        let customer_Orders = orders.filter(order => order["Customer ID"] === customer.CustomerID);
        let total = 0;
        total = customer_Orders.reduce((sum, customerOrder) => {return sum + parseInt(customerOrder.OrderAmount)}, 0);
        result.push({"name":customer.FirstName + ' ' + customer.LastName, "address":`${customer.Address}, ${customer.City}`, "totalOrderValue": `$${total}`})
    });
    res.status(200).json({"customers": result});
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
    console.log(`Endpoints for localhost with port 5000
    • http://localhost:5000/sales/percentage-change
    • http://localhost:5000/sales/highest-business-date
    • http://localhost:5000/sales/business-improvement
    • http://localhost:5000/sales/percentage-change-wholesale
    • http://localhost:5000/sales/customers`)
});