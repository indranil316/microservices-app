const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=> {
    res.sendFile(path.resolve('public','index.html'))
})

app.use('/',(req,res)=> {
    res.send("404");
})


app.listen(PORT, ()=>{
    console.log("App Running at port ", PORT);
})