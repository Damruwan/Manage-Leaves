const mongoose = require('mongoose');
const schema = mongoose.Schema;


const postSchema = new schema({
	name:{type:String,required:true},
	post:{type:String,required:true},
    email:{type:String,required:true},
    about:{type:String,required:true},
	date:{type:Date,required:true},
	content:{type:String,required:true}
});

const Post = module.exports = mongoose.model("Post",postSchema);

module.exports.savePost = function (newPost,callback){

      newPost.save(callback);
};
