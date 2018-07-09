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
		email:req.body.email,
		password:req.body.password,
		state:req.body.state
	});

	User.saveUser(newUser,function (err,user) {
		if(err) {
			if(err.errors.email.message){
               res.json({state:false,msg:"The email is alrady exist"});
			}else{
			   res.json({state:false,msg:"data not inserted"});
		    }
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
            
			if(!match) {
				res.json({state:false,msg:"Password does not match"});
			}	

			jwt.sign({user}, config.secret, {expiresIn:86400}, function(err,token) {
	            if (err) {
	            	throw err;
	            }else{
	            		
	            	res.json(
	            	{
	                    state:true,
	                    token:"Bearer " + token,
	                    id:user._id,
	                    level:user.state,
	                    name:user.full_name,
	                    email:user.email,
	                    post:user.post
	                        
	                });
	            }
            });		

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
        const query = {post:'staff'};
        User.find(query,function(err, user){
		   res.json(user);
	})
	      
});

router.get('/manageAdmin', function(req, res) {
        User.find(function(err, user){
		   res.json(user);
	})
	      
});

router.get('/getUser/:id', function(req, res) {
        User.findOne({_id: req.params.id}, function(err, user){
		    if(err)
			{
				res.json(err);
			}
			else{
				res.json(user);
			}	
	});
	      
});

router.put('/updateUser/:id', function(req, res) {
 
        User.findByIdAndUpdate(req.params.id,
        {
          $set: {full_name: req.body.full_name, post:req.body.post, phone:req.body.phone, username:req.body.username, email:req.body.email, password:req.body.password, state:req.body.state}
        },
        {
          new: true
        },
        function(err, updatedUser){
           if(err)
		   {
			  res.json(err);
		   }
		   else{
			  res.json(updatedUser);
		   }	

       });	      
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


