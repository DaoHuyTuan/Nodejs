const express = require('express');
const app     = express();
const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({extended:false});
app.set('view engine','ejs');
app.set('views', './views')
app.use(express.static('./public'));

class employer {
    constructor(ten,tuoi){
        this.ten = ten;
        this.tuoi = tuoi;
    }
}
const mang = ['<button>hello</button>','<input type="text"/>','<h1>miracle</h1>'];
const emp  = [
    new employer('tuan',22),
    new employer('miracle',42),
    new employer('badman',32)
]
///get Router
app.get("/",     (req,res)  =>  {
    res.render('index',{name: 'tuan'});  
});

app.get("/admin",(req,res)  =>  {
    res.render('admin',{isAdmin:false});
});

app.get("/list", (req,res)  =>  {
    res.render('list',{arr:mang});
});

app.get("/emp",  (req,res)  =>  {
    res.render('emp',{arrEmp:emp});
});

app.get("/add",  (req,res)  =>  {
    res.render('add');
});

///post router
app.post("/xuly",parser,(req,res) => {
    const {txtName,txtAge} = req.body;
    res.send("da nhan request " + " " +  txtName + " " +  txtAge);
    const newEmployee = new employer(txtName,txtAge);
    emp.push(newEmployee);
});

///listen
app.listen(2907,() => console.log("server started"));