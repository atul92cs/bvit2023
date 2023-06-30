const mysql=require('mysql');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'seed',
    database:'users',
    multipleStatements:true
});

db.connect((err)=>{
    if(!err)
    {
        console.log('db connected');
    }
    else
    {
         console.log(`Error occured err: ${err}`);
    }
});
module.exports = db;