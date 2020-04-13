 "use strict"
 const express= require('express')
 const cors= require('cors')
 const app= express();
 const PORT=process.env.PORT || 4000;
 app.use(cors());


 const students= require ("./routes/students")
 app.use("/students", students);

 const course= require ("./routes/course")
 app.use("/course", course);

 const enrollment= require ("./routes/enrollment")
 app.use("/enrollment", enrollment);




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

