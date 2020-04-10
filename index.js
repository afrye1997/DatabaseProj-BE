 "use strict"
 const express= require('express')
 const cors= require('cors')
 const app= express();
 const students= require ("./routes/students")
 const PORT=process.env.PORT || 4000;


 
 

app.use(cors());
 app.use("/students", students);
 //use the agents file to handle  endpoints that start with /things


 app.get("/", (req,res)=>{
     res.send("server is rrunningfjilafjklajfkl;erjkl;gj;lg;lrgrkljgk;r")
 });

app.listen(PORT,  err=>{
    if (err)
        return  console.log("ERROR", err);
    else
        console.log(`listening on port ${PORT}`)
});

