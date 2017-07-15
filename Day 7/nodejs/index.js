const express = require('express');
const PhepTinh = require('./models/PhepTinh');
const Show = require('./contronler/show');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

// app.get('/show', (req, res) => {
//     res.send('Hi');
// });



app.get('/tinh/:tenPhepTinh/:soa/:sob/:soc', require('./contronler/show'));

// localhost:3000/tinh/CONG/4/5 => 4 + 5 = 9

app.listen(3000);

