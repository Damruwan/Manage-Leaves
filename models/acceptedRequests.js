const mongoose = require('mongoose');
const schema = mongoose.Schema;

const acceptedRequestsSchema = new schema({
	name:{type:String,required:true},
	post:{type:String,required:true},
    email:{type:String,required:true},
    req_on:{type:Date,required:true},
	date:{type:String,required:true},
	reason:{type:String,required:true},
	describe:{type:String,required:false},
	state:{type:String,required:true},
	created_at:{type:Date,default:Date.now}
});

const AcceptedRequests = module.exports = mongoose.model("AcceptedRequests",acceptedRequestsSchema);


module.exports.acceptRequest = function (newRequest,callback){

      newRequest.save(callback);
};

module.exports.notacceptRequest = function (newRequest,callback){

      newRequest.save(callback);
};

