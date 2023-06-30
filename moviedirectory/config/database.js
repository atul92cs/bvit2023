const mysql=require('mysql');
const db=mysql.createConnection({
    user:'root',
    password:'seed',
    database:'movies',
    host:'localhost'
});

db.connect((err)=>{
    if(err)
    {
        console.log('error occured '+err);
    }
    else
    {
        console.log('database connected');
    }
});
module.exports=db;