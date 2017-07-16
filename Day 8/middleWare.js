const express = require('express');
const app = express();

app.listen(4000,() => console.log("server started"));
/// middlware là 1 function có 3 tham số (res , req ,next)
app.get('/' , (req,res) => {
    res.send("hello");
})