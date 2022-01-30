const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const OrderSchema= new Schema({
    date:{type: Date, default: Date.now},
    items:{type:Array, default:[]},
    user:{type:mongoose.Types.ObjectId,ref:"User"},
    status:{type:String}
});
const Order=mongoose.model("Order",OrderSchema);
module.exports=Order;