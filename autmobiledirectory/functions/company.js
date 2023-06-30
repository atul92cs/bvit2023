const db=require('../config/database');
createCompany=(req,res)=>{
    let {name}=req.body;
    let sql='insert into company set ?';
    let body={name:name};
    db.query(sql,body,(err,result)=>{
        if(err)
        {
            console.log('error occured'+err);
            res.status(400).json({
                msg:'error occured'
            });
        }
        else
        {
            res.status(200).json({
                msg:'company  created'
            });
        }
    });
};
module.exports={createCompany};