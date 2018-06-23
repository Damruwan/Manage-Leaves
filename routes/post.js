const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const config = require('../config/database');


router.post("/savePost",function(req, res) {
	const newPost = new Post({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		about:req.body.about,
		date:req.body.date,
		content:req.body.content
	});

	Post.savePost(newPost,function (err,post) {
		if(err) {
			res.json({state:false,msg:" not sent post"});
		}
		if(post) {
			res.json({state:true,msg:"sent post"});
		}
	});

});


router.get('/getAllPost', function(req, res) {
         
    Post.find(function(err, post){
		 res.json(post);
	})   
});


router.delete('/deletePost/:id',(req, res, next)=>{
	Post.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}	
	});
});


router.get('/getPost/:id', function(req, res) {
        Post.findOne({_id: req.params.id}, function(err, post){
		    if(err)
			{
				res.json(err);
			}
			else{
				res.json(post);
			}	
	});
	      
});


router.put('/updatePost/:id', function(req, res) {
 
        Post.findByIdAndUpdate(req.params.id,
        {
          $set: {name: req.body.name, post:req.body.post, email:req.body.email, about:req.body.about, date:req.body.date, content:req.body.content}
        },
        {
          new: true
        },
        function(err, updatedPost){
           if(err)
		   {
			  res.json(err);
		   }
		   else{
			  res.json(updatedPost);
		   }	

       });	      
});

module.exports = router;