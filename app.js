const express = require('express')
const app = express();
const path = require('path')
const multer = require('multer')
// const Images = require('./Images')
const storage  = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb )=>{
        console.log(file)
        cb(null,Date.now() + path.extname(file.originalname))
    }

})


const upload = multer({ storage:storage })


app.set('view engine','ejs')

app.get('/upload',(req,res)=>{
    res.render('upload');
});

var type = upload.single('images')
app.post('/upload', type,(req,res)=>{
    res.send('image uploaded')
})

app.listen(3000)
console.log("port is running")