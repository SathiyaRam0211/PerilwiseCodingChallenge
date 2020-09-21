const router = require("express").Router();
const FormData = require("../models/formData.model");


router.route('/:compName').post((req,res)=>{
    const compName = req.params.compName;
    FormData.findOne({companyName : compName},(err,formdata)=>{
        if(!err){
            res.render("form",formdata);
            console.log(formdata);
        }   
    });
});

module.exports = router;






