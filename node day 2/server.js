let express=require('express');
let app=express();
let port=3001;
let userfunctions=require('./functions/userFunctions');
let userRouter=require('./functions/userRouter');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.status(200).json({
        msg:'hello from express api'
    });
});
app.post('/',(req,res)=>{
    let {name}=req.body;
    res.status(200).json({
        msg:`hello ${name}`
    });
});
app.use('/user',userfunctions);
//app.use('/user',userRouter);
app.listen(port,()=>{
    console.log(`app started on ${port}`);
});