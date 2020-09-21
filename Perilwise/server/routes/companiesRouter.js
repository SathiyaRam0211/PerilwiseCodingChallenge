const router = require("express").Router();
const Company = require('../models/companies.model');
const nodeMailer = require("nodemailer");
const FormData = require('../models/formData.model');
require("dotenv").config();
const axios = require("axios");

let companyNames = [];

router.route('/create').post((req,res)=>{
    const companyName = req.body.companyName;
    const contactName = req.body.contactName;
    const contactEmail = req.body.contactEmail;
    const companyAddress = req.body.companyAddress;
    const productRequired = req.body.productRequired;
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sathiyabro619@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });
    let mailOptions = {
        to: contactEmail,
        subject: productRequired+" Insurance-Application-Form from Perilwise Insurtech",
        text: "Hello "+contactName+", Click the link to go ahead filling the form."+" http://localhost:3000/welcome/submit",
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.redirect("http://localhost:3000/welcome");
        }
        else{
            console.log("Email sent successfully");
            const company = new Company({
                companyName : companyName,
                contactName : contactName,
                contactEmail : contactEmail,
                companyAddress : companyAddress,
                productRequired : productRequired
            });
            company.save();
            res.redirect("http://localhost:3000/welcome/checkmail");
        }
    });

});

router.route('/submit').post((req,res)=>{
    Company.findOne().sort({$natural: -1}).limit(1).exec(function(err, company){
        const companyName = company.companyName;
        const formData = new FormData({
            companyName : companyName,        
            i : req.body.i,
            ii : req.body.ii,
            iii : req.body.iii,
            iv : req.body.iv,
            v : req.body.v,
            vi : req.body.vi,
            vii : req.body.vii,
            viii : req.body.viii,
            ix : req.body.ix,
            x : req.body.x,
            xi : req.body.xi,
            xii : req.body.xii,
            xiii : req.body.xiii,
            xiv : req.body.xiv,
            xv : req.body.xv,
            xvi : req.body.xvi,
            xvii : req.body.xvii,
            xviii : req.body.xviii,
            xix : req.body.xix,
            xx : req.body.xx,
            xxi : req.body.xxi,
            xxii : req.body.xxii,
            a : req.body.a,
            b : req.body.b,
            c : req.body.c,
            d : req.body.d,
            e : req.body.e,
            f : req.body.f,
            g : req.body.g,
            h : req.body.h 
            });
        formData.save();
        res.redirect("http://localhost:3000/welcome/submit/success"); 
    });
}).get((req,res)=>{
    Company.find((err,companies)=>{
        if(err){
            console.log(err);
        }
        else{
            companyNames = [];
            companies.forEach((company)=>{
                companyNames.push(company.companyName);
            });
        }
    });
    res.send(companyNames);
});

module.exports = router;
