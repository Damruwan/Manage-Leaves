const express = require('express');
const router = express.Router();
const Request = require('../models/request');
const AcceptedRequests = require('../models/acceptedRequests');
const config = require('../config/database');




router.post("/manageRequest",function(req, res) {
	const newRequest = new Request({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		date:req.body.date,
		reason:req.body.reason,
		describe:req.body.describe
	});

	Request.saveRequest(newRequest,function (err,request) {
		if(err) {
			res.json({state:false,msg:" not sent request"});
		}
		if(request) {
			res.json({state:true,msg:"sent request"});
		}
	});

});

router.get('/manageRequest/:email', function(req, res) {
         
        const query = {email: req.params.email};
        Request.find(query,function(err, request){
		   res.json(request);
	    });	
       
});



router.delete('/manageRequest/:id',(req, res, next)=>{
	Request.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}	
	});
});


router.get('/manageRequest', function(req, res) {
         
    Request.find(function(err, request){
		 res.json(request);
	})   
});


router.post("/acceptRequest",function(req, res) {
	const newAcceptedRequests = new AcceptedRequests({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		date:req.body.date,
		reason:req.body.reason,
		describe:req.body.describe,
		state:'Accepted'
	});

	AcceptedRequests.acceptRequest(newAcceptedRequests,function (err,request) {
		if(err) {
			res.json({state:false,msg:" somthing went wrong "});
		}
		if(request) {
			res.json({state:true,msg:"accepted request"});
		}
	});

});

router.post("/notacceptRequest",function(req, res) {
	const newAcceptedRequests = new AcceptedRequests({
		name:req.body.name,
		post:req.body.post,
		email:req.body.email,
		date:req.body.date,
		reason:req.body.reason,
		describe:req.body.describe,
		state:'Cancelled'
	});

	AcceptedRequests.notacceptRequest(newAcceptedRequests,function (err,request) {
		if(err) {
			res.json({state:false,msg:" somthing went wrong "});
		}
		if(request) {
			res.json({state:true,msg:"not accepted request"});
		}
	});

});

router.get('/viewHistory/:email', function(req, res){

	const query = {email: req.params.email};
        AcceptedRequests.find(query,function(err, user){
		   res.json(user);
	    });	
}); 

module.exports = router;