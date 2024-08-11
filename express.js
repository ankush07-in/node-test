// Express.js Framework:

// Introduction to Express.js

// express js is a package of npm
// framework
// express js manages everything from receiving the request and giving back the response

// Setting up a basic Express application
// Routing
// Middleware -> requestHandler is a middileware which is function(req, res{})
// Request and response handling
// Error handling

const express = require('express');
const app = express()

app.use(function(req, res, next){
    console.log("middleware started");
    next();
});
app.use(function(req, res, next){
    console.log("middleware started again");
    next();
});

app.get('/', function(req, res){
    res.send("Hello World");
});

app.get("/about", function(req, res){
    res.send("This is the about page");
});

app.get('/profile', function(req, res, next){
    return next(new Error("Something went wrong"));
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(3000);