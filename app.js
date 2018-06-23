const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//require('bootstrap');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
 
const config = require('./config/database');
const user = require('./routes/users');
const request = require('./routes/request');
const post = require('./routes/post');


const connection = mongoose.connect(config.database);
if (connection){
	console.log("database connected");
}else{
	console.log("database not connected");
}


app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);
app.use('/request',request);
app.use('/post',post);

app.get("/",function(req, res) {
	res.send("hello");
});

app.listen(port,function () {
	console.log("listening to port "+ port);
});