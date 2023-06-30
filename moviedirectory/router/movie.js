let {createMovie}=require('../functions/movie');
let express=require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    createMovie(req,res);
});
module.exports=router;