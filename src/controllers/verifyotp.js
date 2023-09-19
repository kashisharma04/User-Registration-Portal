const express=require('express');
const mongoose=require('mongoose');
const twilio=require('twilio');
const ipinfo=require('ipinfo');
require('dotenv').config();
const {accountSID, authToken, twilioPhone}=process.env
const Register=require('../models/user');

const verifyUser=async (req,res)=>{
 try {
    const {phone,otp}=req.body;

    const user= await Register.findOne({phone});
    
    if(!user){
        return res.status(404).send({error:"User Not Found"});
    }

    if(user.OTP !== otp){
        return res.status(400).send({error:"Invalid OTP"})
    }

const now = new Date();
if(now > user.otpExp){
    return res.status(400).send({error:"OTP has expired"})
}

//if OTP is valid,then mark the user as verified true
user.isVerified=true;
await user.save();

return res.status(200).send({message:"OTP is verified"})
    
 } catch (error) {
    
    console.log(error);
    return res.status(500).send({error:`${error.message} =Internal Server Error Probably`})
 }
}

module.exports=verifyUser;