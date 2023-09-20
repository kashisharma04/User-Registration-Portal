const express = require('express')
const router = express.Router()
const Register =require('../models/user')
const registerUser = require('../controllers/userOtp')
const verifyUser= require('../controllers/verifyotp')

router.get('/' , (req,res)=>{
    res.send("router method")
})
// router.post('/register',Register )
router.post('/userIp',registerUser )
router.post('/verify', verifyUser);

module.exports = router;