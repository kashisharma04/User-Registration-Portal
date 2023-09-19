// / name, phone number, IP address, and OTP.
const express = require('express')
const mongoose=require('mongoose');

const regisSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String, required:true},
    IP:{type:String},
    OTP:{type:String},
    otpExp:{type:String},
    isVerified:{type:Boolean,default:false}
},{timestamps:true})

const Register=mongoose.model('register', regisSchema)

module.exports = Register