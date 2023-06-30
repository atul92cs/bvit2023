let {addCar,getCars,getCarsByCompany}=require('../methods/car');
let express=require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    let {id,name,company}=req.body;
    let cars=addCar(id,name,company);
    res.status(200).json({
        cars:cars
    });
});
router.get('/',(req,res)=>{
    let cars=getCars();
    res.status(200).json({
        cars:cars
    });
});
router.get('/:id',(req,res)=>{
    let {id}=req.params;
    let cars=getCarsByCompany(id);
    res.status(200).json({
        cars:cars
    });
});
module.exports=router;