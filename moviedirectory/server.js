let express=require('express');
let app=express();
let multer=require('multer');
let port=3000;
let movierouter=require('./router/movie');
let genrerouter=require('./router/genre');
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
app.use('/movie',movierouter);
app.use('/genre',genrerouter);
app.listen(port,()=>{
    console.log('server started');
});