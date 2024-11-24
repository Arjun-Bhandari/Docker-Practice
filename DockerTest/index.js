import express from "express"
const app = express();
const port = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send({message:"Hello"})
})

app.get("/api/v1/food",(req,res)=>{
    res.send({
        eggitems:["eggfry","eggfryrice","omlet"],
        cickenitems:["cickenfryrice","cickenfry","cickentandoori"],
        vegitem:["vegfryrice","vegmomo","vegchow"]

    })
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})