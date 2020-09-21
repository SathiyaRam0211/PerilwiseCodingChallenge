const router = require("express").Router();
const User = require('../models/users.model');
const passport = require("passport");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.route('/register').post((req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.register({username: email},password,(err,user)=>{
        if(user){
            passport.authenticate("local");
            res.redirect("http://localhost:3000/welcome");
            }
        else{
            res.redirect("http://localhost:3000");
        }
    });
});

router.route('/login').post((req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    let user = new User({
        username: email,
        password: password
    });
    req.login(user,(err)=>{
        if(!err){
            passport.authenticate('local');
            if(req.isAuthenticated()){
                res.redirect("http://localhost:3000/welcome");
            }
        }
        else{
            alert("Invalid email or password!");
            res.redirect("http://localhost:3000");
        }
    });
});

router.route('/logout').post((req,res)=>{
    req.logout();
    res.redirect("http://localhost:3000");
});

router.route('/home').get((req,res)=>{
    res.write("<h1>Hi</h1>");
});

module.exports = router;