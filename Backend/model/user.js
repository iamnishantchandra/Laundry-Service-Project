const mongoose = require('mongoose');
userSchema= new mongoose.Schema({
    Name :{type:String,required:true},
    Email :{type:String,required:true,unique:true},
    Number : {type: Number , require: true , unique: true},
    State : {type:String , require: true},
    District : {type:String , require: true},
    Pincode : {type:Number,required:true},
    Password:{type: String , require: true},
    Address:{type:String ,require:true}
},)

const User = mongoose.model('User',userSchema);
module.exports = User;