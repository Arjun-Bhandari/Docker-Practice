const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const DATABASE = "mongodb://mymongo:27017/testup"

mongoose.connect(DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("DATABASE connected 😁")
})
.catch(()=>{
    console.log("ERROR in DB Connection 😭")
})

app.get("/",(req,res)=>{
    res.json({message:"You are visiting ROOT route"})
})

app.listen(port,()=>{
console.log(`Server Listining on ${port}`)
})