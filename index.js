 "use strict"
 const express= require('express')
 const cors= require('cors')
 const app= express();
 const students= require ("./routes/students")
 const port=4000;


 
 

app.use(cors());
 app.use("/students", students);
 //use the agents file to handle  endpoints that start with /things


 app.get("/", (req,res)=>{
     res.send("server is running")
 });

app.listen(port,  err=>{
    if (err)
        return  console.log("ERROR", err);
    else
        console.log(`listening on port ${port}`)
});

