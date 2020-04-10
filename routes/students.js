"use  strict";
const express= require("express");
let router = express.Router();
var connection = require('../connection');

router.route("/getStudent")
.get(async (req, res, next)=> {
    connection.query('SELECT * FROM STUDENT', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
      });

   
}) 


router.route("/addStudent")
.get(async (req, res, next)=> {
    //  students/addStudents 
    const {S_ID,  S_NAME, S_MAJOR}= req.query;
    
    const INSERT_STUDENT_QUERY= `INSERT INTO  STUDENT 
                               VALUES ('${S_ID}', '${S_NAME}','${S_MAJOR}')`;
    connection.query(INSERT_STUDENT_QUERY, function (error, results) {
        if (error)
          return res.send(error)
        else{
          console.log(results)
          var result ="yay";
            return res.send(result)
        }
      });
   
}) 



module.exports= router;