const db=require('../config/database');
createGenre=(req,res)=>{
    let {name}=req.body;
    let body={name:name};
    let sql='insert into genre set ?';
    db.query(sql,body,(err,result)=>{
        if(err)
        {
                res.status(400).json({
                    msg:'error occured',
                    error:err
                });
        }
        else
        {
            res.status(200).json({
                msg:'genre created'
            });
        }
    });
}
module.exports={createGenre};