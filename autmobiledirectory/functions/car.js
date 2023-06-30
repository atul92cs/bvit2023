const db=require('../config/database');
createCar=(req,res)=>{
    let {name,company}=req.body;
    //let {file}=req.file;
    let image=new Date().toISOString().replace(/:/g,'-')+'-'+req.file.originalname ;
    let sql='insert into car set ?';
    let body={name:name,company:company,picture:image};
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
                msg:'car created'
            });
        }
    });
};

module.exports={createCar};