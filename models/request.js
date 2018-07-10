const mongoose = require('mongoose');
const schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const requestSchema = new schema({
	name:{type:String,required:true},
	post:{type:String,required:true},
    email:{type:String,required:true},
	date:{type:String,required:true},
	reason:{type:String,required:true},
	describe:{type:String,required:false},
	array:{type:Object,required:true,unique:true},
	created_at:{type:Date,default:Date.now}
});

requestSchema.plugin(uniqueValidator);

const Request = module.exports = mongoose.model("Request",requestSchema);


module.exports.saveRequest = function (newRequest,callback){

      newRequest.save(callback);
};
