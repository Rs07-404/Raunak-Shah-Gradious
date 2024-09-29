const express = require('express')
const app = express()


var bodyParser = require('body-parser');

app.use(express.json());
let subscription = {
  name:"",
  email:"",
  role:"",
  frequency:"",
  termAgrement:""
};


app.get('/test', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",  
  "Access-Control-Allow-methods":"*"});
  data = {
  msg:"welcome"
  };
  res.send(JSON.stringify(data));
})

app.get('/test11', (req, res) => {
  res.send('welcome test')
})

app.post('/addSubscription', (req, res) => {
  console.log("params", req.params);
  console.log("query", req.query);
  console.log("body", req.body);
  const {name, email, role, frequency, termAgrement} = req.body;
  subscription={
    name:name,
    email:email,
    role:role,
    frequency:frequency,
    termAgrement:termAgrement
  }
  res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",
  "Access-Control-Allow-methods":"*"});
  data = {
  msg:"successfully subscribed"
  };
  res.send(JSON.stringify(data));
})


app.get('/mySubscription', (req, res) => {
  console.log("Loading my subscription");

  res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",  
  "Access-Control-Allow-methods":"*"});
  data = {
  subscription:{
            name:subscription.name,
            email:subscription.email,
            role:subscription.role,
            frequency:subscription.frequency,
            termAgrement:subscription.termAgrement
  }}
  res.send(JSON.stringify(data));
})

var testRouter = express.Router();
app.use("/mytest",testRouter); 

testRouter.post('/test2/:cc', (req, res) => {
  //console.log(req);
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  res.send('welcome')
})

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})

testRouter.post('/test3/:cc', (req, res) => {

  console.log(req.params);
  console.log(req.query);
    console.log(req.body);
  res.send('welcome')
})

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
        
    return next();
  });



