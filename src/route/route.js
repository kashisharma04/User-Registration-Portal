const express = require('express')
const router = express.Router()
// const {validateIP} = require('../middleware/middleware')
// const {router} = require('../models/ipUser')
const Register =require('../models/user')
const registerUser = require('../controllers/userOtp')
const verifyUser= require('../controllers/verifyotp')

//ip route
// router.get('/ip', validateIP)
// router.get('/ip',validateIP, call);
// router.get('/secure-route', (req, res) => {
//     const { country, city } = req; // Access geolocation data
  
    // Implement your route logic here
//     res.json({ country, city });
//   });

router.get('/' , (req,res)=>{
    res.send("router method")
})
// router.post('/register',Register )
router.post('/userIp',registerUser )
router.post('/verify', verifyUser);

module.exports = router;