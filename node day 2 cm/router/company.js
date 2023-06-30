let {addCompany,getCompanies}=require('../methods/company');
let express=require('express');
let db=require('../config/database');
let router=express.Router();

router.get('/',(req,res)=>{
    let sql='select * from company';
    db.query(sql,(err,result)=>{
       if(!err)
       {
          
           res.status(200).json({
               msg:result
           });
           
       }
       else
       {
           res.status(400).json({
               msg:'error',
               error:err
           }); 
       }
   });
});
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let sql='delete from company where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'company deleted'
            });
        }
        else
        {
            res.status(400).json({
                msg:'error',
                error:err
            }); 
        }
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,year}=req.body;
    let sql='update company set name=? ,founding_year=? where id=?';
    let body=[name,year,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'company updated'
            });
        }
        else
        {
            res.status(400).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
router.post('/add',(req,res)=>{
    let {name,year}=req.body;
    
     let body={name:name,founding_year:year};
     let sql='insert into company set ?';
     db.query(sql,body,(err,result)=>{
        if(!err)
        {
           
            res.status(200).json({
                msg:'company added'
            });
            
        }
        else
        {
            res.status(400).json({
                msg:'error',
                error:err
            }); 
        }
    });
});
module.exports=router;