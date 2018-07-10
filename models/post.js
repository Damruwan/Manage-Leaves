const mongoose = require('mongoose');
const schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const postSchema = new schema({
	name:{type:String,required:true},
	post:{type:String,required:true},
    email:{type:String,required:true},
    about:{type:String,required:true},
	content:{type:String,required:true},
	array:{type:Object,required:true,unique:true},
	created_at:{type:Date,default:Date.now}
});

postSchema.plugin(uniqueValidator);

const Post = module.exports = mongoose.model("Post",postSchema);

module.exports.savePost = function (newPost,callback){

      newPost.save(callback);
};
