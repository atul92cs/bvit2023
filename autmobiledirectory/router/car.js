let express=require('express');
let router=express.Router();
let {createCar}=require('../functions/car');
router.post('/add',(req,res)=>{
    createCar(req,res);
});
module.exports=router;