const mongoose = require('mongoose');
const schema = mongoose.Schema;

const requestSchema = new schema({
	name:{type:String,required:true},
	post:{type:String,required:true},
    email:{type:String,required:true},
	date:{type:Date,required:true},
	reason:{type:String,required:true},
	describe:{type:String,required:false}
});

const Request = module.exports = mongoose.model("Request",requestSchema);


module.exports.saveRequest = function (newRequest,callback){

      newRequest.save(callback);
};
