const express = require('express');
const router = express.Router();

const Order = require('../model/order');
const bodyParser = require('body-parser');

router.post('/',async(req,res)=>{
    try{
        console.log(req.body);
        const order =await  Order.create(req.body);
        res.json({
            status:'success',
            data:order
        })
    }catch(e){
        console.log(e);
        res.json({
            status:'failed',
            message:e.message
        })
    }

})


router.get('/',(req,res)=>{
    try{
        res.json({
            status:'success'
        })
    }catch(e){

    }
    
})

module.exports= router;