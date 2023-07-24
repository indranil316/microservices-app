const express = require('express');
const router = express.Router();
const DB = require('../database');
const db = new DB();

router.get('/get', (req,res)=> {
    const data = db.getAll();
    res.send(data);
})

module.exports = router;