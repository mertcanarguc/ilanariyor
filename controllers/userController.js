const async = require("async")
var User = require('../models/user');

exports.register = async(req,res,next)=>{
    res.render('login', { });
}

exports.registerpost = async(req,res,next)=>{
	User.register(new User({ username: req.body.username}),
    req.body.password, function(err, user) {
   	 if (err) {
   		 return res.render('login', { user: user });
   	 }
   	 
   	 passport.authenticate('local')(req,res, function() {
   		 res.redirect('/');
   	 });
    });
}

exports.login = async(req,res,next)=>{
    res.render('login', { user : req.user });
}

exports.loginpost = async(req,res,next)=>{
    res.redirect('/');
}

exports.logout = async(req,res,next)=>{
	req.logout();
    res.redirect('/');
}