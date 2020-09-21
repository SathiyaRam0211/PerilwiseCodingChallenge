const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();
const cors = require("cors");
const app = express();
const ejs = require("ejs");

app.use(cors());
app.set('view engine','ejs');
app.use(express.static("public"));

const usersRouter = require('./routes/usersRouter');
const companiesRouter = require('./routes/companiesRouter');
const dataRouter = require('./routes/dataRouter');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.CLUSTER_URI;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});
const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB database connection established successfully.")
});


app.use('/users',usersRouter);
app.use('/companies',companiesRouter);
app.use('/data',dataRouter);


const port = process.env.PORT || 5000; 
app.listen(port,()=>{
    console.log("Server is up and running in PORT "+port+".");
});