let express=require('express');
let router=express.Router();
let db=require('../config/database');
const { route } = require('./userFunctions');
router.post('/add',(req,res)=>{
   let {name,email}=req.body;
   let body={name:name,email:email};
   let sql='insert into userinfo set ?';
   db.query(sql,body,(err,result)=>{
    if(!err)
    {
        return res.status(200).json({
            msg:'User Created'
        });
    }
    else
    {
        return res.status(400).json({
            msg:'error occured',
            error:err
        });
    }
   });
});

router.get('/',(req,res)=>{
    let sql='select * from userinfo';
    db.query(sql,(err,result)=>{
        if(result)
        {
            if(result.length>0)
            {
                return res.status(200).json({
                    users:result
                });
            }
            else
            {
                return res.status(200).json({
                    users:[]
                });
            }
        }else
        {
            return res.status(400).json({
                msg:'error occured',
                error:err
            });
        }
    });

});

router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let body=[id];
    let sql='delete from userinfo where id=?';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            return res.status(200).json({
                msg:'user deleted'
            });
        }
        else
        {
            return res.status(400).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,email}=req.body;
    let body=[name,email,id];
    let sql='update userinfo set name=?,email=? where id=?';
    db.query(sql,body,(err,result)=>{
        if(!result)
        {
            return res.status(400).json({
                msg:'error occured',
                error:err
            });
        }
        else
        {
            return res.status(200).json({
                msg:'user updated'
            });
        }
    });
});
module.exports=router;