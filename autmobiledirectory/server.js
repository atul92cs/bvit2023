let express=require('express');
let app=express();
let carRouter=require('./router/car');
let companyRouter=require('./router/company');
let pagerouter=require('./router/index');
let port=3000;
//let handlebars=require('handlebars');
let path=require('path');
let {engine}=require('express-handlebars');
const multer=require('multer');
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('.handlebars',engine({extname:'.handlebars'}));
app.use(express.static(path.join(__dirname,'public')));
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
app.use('/',pagerouter);
app.use('/car',carRouter);
app.use('/company',companyRouter);
app.listen(port,()=>{
    console.log('server started '+port);
});