const mysql = require('mysql2');

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rohit',
    database:'contact'
});

db.connect((err)=>{
    if(err)throw err;
    console.log('mysql is connected');

});
module.exports=db;