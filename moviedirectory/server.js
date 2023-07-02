let express=require('express');
let app=express();
let multer=require('multer');
let path=require('path');
let port=3000;
let hbs=require('handlebars');
let movierouter=require('./router/movie');
let genrerouter=require('./router/genre');
let router=require('./router/index');
let {engine}=require('express-handlebars');
//const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('.handlebars',engine({extname:'.handlebars'}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let diskstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+
        file.originalname);
    }
});
app.use(multer({storage:diskstorage}).single('image'));
app.use('/',router);
app.use('/movie',movierouter);
app.use('/genre',genrerouter);
app.listen(port,()=>{
    console.log('server started');
});