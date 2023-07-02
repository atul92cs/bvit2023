let express=require('express');
let router=express.Router();
let db=require('../config/database');

router.get('/',(req,res)=>{
    let sql='select * from genre';
    db.query(sql,(err,result)=>{
        if(result)
        {
            res.render('genre',{genre:result})
        }
        else
        {
            res.status(400).json({
                msg:'data not found'
            });
        }
    });
});
module.exports=router;