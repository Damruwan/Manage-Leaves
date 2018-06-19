const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const verify = require('../config/verify');


router.post("/manageUsers",function(req, res) {
	const newUser = new User({
		full_name:req.body.full_name,
		post:req.body.post,
		phone:req.body.phone,
		username:req.body.username,
		email:req.body.email,
		password:req.body.password,
		state:req.body.state
	});

	User.saveUser(newUser,function (err,user) {
		if(err) {
			res.json({state:false,msg:"data not inserted"});
		}
		if(user) {
			res.json({state:true,msg:"data inserted"});
		}
	});
});

router.post("/login",function(req, res) {
	const email = req.body.email;
	const password = req.body.password;

	User.findByEmail(email,function (err,user) {

		if(err) throw err;

		if (!user){
			res.json({state:false,msg:"No user found"});
			return false;
		}

		User.passwordCheck(password,user.password,function (err,match) {
			if(err) throw err;

			if(match) {
				
				jwt.sign({user}, config.secret, {expiresIn:86400}, function(err,token) {
	            	if (err) {
	            		throw err;
	            	}else{
	            		
	            		res.json(
	            		{
	                         state:true,
	                         token:"Bearer " + token,
	                         level:user.state,
	                         name:user.full_name,
	                         email:user.email,
	                         post:user.post
	                        
	            		});
	            	}
                });
                
			}else{
              res.json({state:false,msg:"Password does not match"});
			}

		});
			

	});

});

router.get('/profile', verify.verifytoken, function(req, res) {
    
	jwt.verify(req.token, config.secret, function(err,data) {
		if (err) {
			throw err;
		}else{
			res.json({user:data.user});
		}
	})
       
    }
);

router.get('/manageUsers', function(req, res) {

        User.find(function(err, user){
		   res.json(user);
	})
	      
});



router.delete('/manageUsers/:id',(req, res, next)=>{
	User.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}	
	});
});



module.exports = router;


