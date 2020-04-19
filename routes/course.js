"use  strict";
const express= require("express");
const router = express.Router();
var connection = require('../connection');

router.route("/getCourse")
.get(async (req, res, next)=> {
    connection.query('SELECT * FROM COURSE', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
      });

   
})

router.route("/getCourse/givenDepartment")
.get(async (req, res, next)=> {

  const {C_DEPTCODE}= req.query;

  const QUERY_DEPT_COURSE= `SELECT * FROM COURSE  WHERE C_DEPTCODE= '${C_DEPTCODE}';`;

    connection.query(QUERY_DEPT_COURSE, function (error, results, fields) {
        if (error)
          res.send(error)
        console.log('The solution is: ', results);
        res.send(results);
      });
})

// SELECT c.C_TITLE
// FROM ENROLLMENT e JOIN COURSE c JOIN  STUDENT s
// WHERE s.S_ID=010773971 AND e.COURSE_DEPTCODE=c.C_DEPTCODE AND c.C_COURSENUM=e.COURSE_COURSENUM;

router.route("/getCourse/givenStudents")
.get(async (req, res, next)=> {

  const {STUDENT_ID}= req.query;
  const QUERY_COURSE_BY_STUDENT=   `SELECT DISTINCT c.C_DEPTCODE, c.C_TITLE, c.C_COURSENUM,c.C_CREDITHOURS
                                    FROM ENROLLMENT e JOIN COURSE c JOIN  STUDENT s
                                    WHERE e.STUDENT_ID=${STUDENT_ID} 
                                    AND e.COURSE_DEPTCODE=c.C_DEPTCODE 
                                    AND c.C_COURSENUM=e.COURSE_COURSENUM;`;

    connection.query(QUERY_COURSE_BY_STUDENT, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
      });
})





router.route("/addCourse")
.get(async (req, res, next)=> {
    //  students/addStudents 
    const {C_DEPTCODE, C_COURSENUM, C_TITLE, C_CREDITHOURS}= req.query;
    
    const INSERT_COURSE_QUERY= `INSERT INTO  COURSE 
                               VALUES ('${C_DEPTCODE}', ${C_COURSENUM},'${C_TITLE}',${C_CREDITHOURS})`;
    connection.query(INSERT_COURSE_QUERY, function (error, results) {
        if (error)
          return res.send(error.code)
        else{
          console.log(results)
          var result ="Course added successfully!";
            return res.send(result)
        }
      });
}) 



module.exports = router;