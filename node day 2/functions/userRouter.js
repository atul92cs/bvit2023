let {addUser,countUsers}=require('../users/usermethod');

let express=require('express');
//const router = require('./arthmeticfunctions');
let router=express.Router();
router.post('/add',(req,res)=>{
    let {id,name,email}=req.body;
    let users=addUser(id,name,email);
    res.status(200).json({
        users:users
    });
});
router.get('/count',(req,res)=>{
    let count=countUsers();
    res.status(200).json({
        count:count
    });
});
module.exports=router;