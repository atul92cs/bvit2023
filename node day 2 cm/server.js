let express=require('express');
let carouter=require('./router/car');
let companyrouter=require('./router/company');
let app=express();
let port=3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/car',carouter);
app.use('/company',companyrouter);
app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})