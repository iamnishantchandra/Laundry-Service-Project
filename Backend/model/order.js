const mongoose = require('mongoose');
const Schema = mongoose.Schema;
orderSchema= Schema({
    title: {type:String , require: true},
    body : {type:String , require: true},
    user : {type:Schema.Types.ObjectId,ref:'User'},
},)

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;