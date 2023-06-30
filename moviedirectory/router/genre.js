let {createGenre}=require('../functions/genre');
let express=require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    createGenre(req,res);
});
module.exports=router;