let express=require('express');
let router=express.Router();
let {createCompany}=require('../functions/company');
router.post('/add',(req,res)=>{
    createCompany(req,res);
});
module.exports=router;