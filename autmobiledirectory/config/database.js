const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'seed',
    database:'automobile'
});

db.connect((err)=>{
    if(err)
    {
        console.log(`error :- ${error}`);
    }
    else
    {
        console.log('db connected');
    }
});

 module.exports=db;