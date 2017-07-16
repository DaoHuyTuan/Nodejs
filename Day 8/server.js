const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb) => cb(null,"./public"),
    filename:(req,file,cb) => cb(null,"b.jpg")
});
const upload = multer({storage}).single('avatar');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));


app.get('/upload',(req,res) => {
    res.render('upload');
});
app.post('/upload',upload,(req,res) => {
    res.send("da upload file" + req.file.originalname);
})
app.listen(2907,() => console.log("server is running...."));