let express=require('express');
const app=express();
let port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.status(200).json({
        msg:'hello user'
    });
});
app.post('/',(req,res)=>{
    let {name}=req.body;
    res.status(200).json({
        msg:`Hello ${name}`
    });
});
app.listen(port,()=>{
    console.log('Server running on'+ port);
});