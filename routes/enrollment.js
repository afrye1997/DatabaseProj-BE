"use  strict";
const express = require("express");
const router = express.Router();
var connection = require("../connection");

router.route("/getEnrollment").get(async (req, res, next) => {
  connection.query("SELECT * FROM ENROLLMENT", function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results);
  });
});

router.route("/addEnrollment").get(async (req, res, next) => {
  //  students/addStudents
  const {
    ENROLLMENT_ID,
    STUDENT_ID,
    COURSE_DEPTCODE,
    COURSE_COURSENUM,
  } = req.query;

  const INSERT_ENROLLMENT_QUERY = `INSERT INTO  ENROLLMENT VALUES (${ENROLLMENT_ID}, ${STUDENT_ID}, '${COURSE_DEPTCODE}', ${COURSE_COURSENUM})`;
  connection.query(INSERT_ENROLLMENT_QUERY, function (error, results) {
    if (error) {
      return res.send(error.code);
    } else {
      console.log(results);
      var result = "Applicant was added successfully!";
      return res.send(result);
    }
  });
});

module.exports = router;
