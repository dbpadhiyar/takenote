const express = require('express');
const User = require('../models/User');
const router = express.Router();


//create user a using : "POST" : "/api/auth". Doesn't require auth
router.post('/', (req, res) => {
    const user = User(req.body);
    user.save();
    res.send(req.body);
})


module.exports = router