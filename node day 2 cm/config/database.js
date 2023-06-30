const mysql=require('mysql');

const db=mysql.createConnection({
    host:'localhost',
    port:3306,
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
        console.log('error occured : '+err);
    }
});
module.exports=db;