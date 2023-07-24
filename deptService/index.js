const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./api');

const app = express();
const PORT = 4001;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.use('/',(req,res)=> {
    res.send("Department Service");
});

app.listen(PORT, ()=>{
    console.log("Department Service Running at port ", PORT);
})