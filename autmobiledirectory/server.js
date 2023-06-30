let express=require('express');
let app=express();
let carRouter=require('./router/car');
let companyRouter=require('./router/company');
let port=3000;
const multer=require('multer');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let filestorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+file.originalname);
}
});
app.use(multer({storage:filestorage}).single('image'));
app.use('/car',carRouter);
app.use('/company',companyRouter);
app.listen(port,()=>{
    console.log('server started '+port);
});