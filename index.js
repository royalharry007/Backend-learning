const { log } = require('console');
const express = require('express')

const app = express()
const port = 3000;

app.set("view engine", "ejs")
// app.use((req , res)=>{
//     console.log(" reqest received ")
//     res.send(" this is response ")
// })

app.get("/",(req, res) =>{
    let diceVal = Math.floor(Math.random() *6 ) + 1;
    res.render("home.ejs",{num : diceVal});

})

app.listen(port, () => {
    console.log(" port is listening ")

})