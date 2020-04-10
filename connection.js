
const mysql= require('mysql') 

const connection= mysql.createConnection({
    host:"db-proj.ccyciftfcphy.us-east-2.rds.amazonaws.com",
    user:"admin",
    password:"password123",
    database:"csce4523"
    
});

module.exports = connection;