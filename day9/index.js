const express = require('express');
const app     = express();
app.set('view engine','ejs');
app.set('views', './views')
app.listen(2907,() => console.log("server started"));