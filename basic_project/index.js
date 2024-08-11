const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // parses
app.use(express.urlencoded({ extended: true })); // parses
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    // res.send("Started");
    res.render("index");
});

app.get("/profile/:username", function(req, res){
    res.send(`Welcome, ${req.params.username} !!`);
});
app.get("/author/:username/:age", function(req, res){
    res.send(`Welcome, ${req.params.username} !! <br> Your age is: ${req.params.age} !! <br> You are running late.`);
});

app.listen(3001, function(){
    console.log("server running");
});