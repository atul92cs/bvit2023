const db=require('../config/database');
createMovie=(req,res)=>{
    let {name,genre}=req.body;
    let image=new Date().toISOString().replace(/:/g,'-')+'-'+
    req.file.originalname ;
    let sql='insert into movie set ?';
    let body={name:name,genre:genre,picture:image};
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
                msg:'movie created'
            });
        }
    });
};
module.exports={createMovie};