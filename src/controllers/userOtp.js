const express = require('express');
const mongoose = require('mongoose');
const twilio = require('twilio');
const ipinfo = require('ipinfo');
require('dotenv').config();
const {accountSID, authToken, twilioPhone, MY_TOKEN}=process.env
const Register=require('../models/user')

const client = new twilio(accountSID, authToken)

const registerUser = async (req, res) => {
    try {
        const { name, phone } = req.body

        //validating input name and phone
        if (!name || !phone) {
            return res.status(400).send({ status: false, message: "Either name or phone is missing" })
        }

        //get the user's IP address using ipinfo
        // const ip = req.ip; //express automatically provides IP address
        const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        console.log(ip)

        const { IPinfoWrapper } = require("node-ipinfo");

        const ipinfo = new IPinfoWrapper(MY_TOKEN);
        // "1.1.1.1"
        ipinfo.lookupIp(ip).then((response) => {
            // console.log(response.loc);
            console.log(response.country)
            // console.log(response.countryCode)
            console.log(response.city)
        });
        //generate otp 6-digit
        const otp = Math.floor(100000 + Math.random() * 900000);
        //store otp and expiration time in the database
        const otpExp = new Date();
        otpExp.setMinutes(otpExp.getMinutes() + 3);

        const registeredUser = new Register({
            name,
            phone,
            IP: ip,
            OTP: otp,
            otpExp: otpExp
        });
        await registeredUser.save();


        //send OTP to the user's phone number using twilio

        await client.messages.create({
            body: `The new OTP for your registration is : ${otp}`,
            from: twilioPhone,
            to: phone
        });
        return res.status(201).send({ status: true, message: "OTP has been sent successfully" })



    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

module.exports= registerUser
