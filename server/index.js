const express = require("express");
const app = express();
const parser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(parser.json())

mongoose.connect("mongodb://127.0.0.1:27017/details", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("connection with MongoDB was successful");
});



app.listen(PORT, function() {
    console.log("server is running on Port: + PORT");
});

