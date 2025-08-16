const express = require("express")
const app = express();
const port= 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');



app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

 let Posts= [
    {
        id: uuidv4(),
        username: "Harichand",
        content: " code until you die"
    },
    {
        id: uuidv4(),
        username: "ram",
        content : " coding is the art of game"
    },
    {
        id:uuidv4(),
        username:"shyam",
        content: "shyam is doing hardwork"
    }
];

app.get("/posts", (req, res)=>{


     res.render("index.ejs", {Posts})
})
app.get("/posts/new",(req, res) =>{
res.render("new.ejs");
})

app.post("/posts",(req, res) =>{

    let {username , content} = req.body;
    let id = uuidv4();
    Posts.push({id , username, content});
    res.redirect("/posts")
    
})

app.get("/posts/:id",(req, res) =>{
   let {id} = req.params;
   let post = Posts.find((p)=> p.id == id )
    res.render("show.ejs",{post})
})

app.listen(port, () => {
    console.log("restapi port is listening")
})

