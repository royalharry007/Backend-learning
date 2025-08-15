const { log } = require('console');
const { name } = require('ejs');
const express = require('express')

const app = express()
const port = 3000;

// we are setting the view engine to ejs to use ejs in our sytem 
app.set("view engine", "ejs")

app.get("/ig/:username", (req, res) => {

    const instaData = require("./data.json")
    let username = req.params.username;
    let data = instaData[username];


    if (username) {
     res.render("instagram.ejs", { data });

    }
    else{
        res.rende("error.ejs")
    }



  

})

// making a connection to listen the port 
app.listen(port, () => {
    console.log(" port is listening ")

})