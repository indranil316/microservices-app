const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./api');

const app = express();
const PORT = 4002;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.use('/',(req,res)=> {
    res.send("Employee Service");
})

app.listen(PORT, ()=>{
    console.log("Employee Service Running at port ", PORT);
})