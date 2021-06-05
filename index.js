const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const { mongoose } = require('./db.js');
var user = require('./controllers/usercontrollers.js');


var app = express()
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.get("/", (req,res)=>{
    res.send("Server Started")
});

app.listen(3000, () => console.log('Server started at port: 3000'));

app.use('/users', user);