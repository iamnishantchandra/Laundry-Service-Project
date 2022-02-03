const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const User = require('./model/user');
const secret = 'gulshan';
app.use(bodyParser());
const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users');


const userRoutes = require('./routes/register');
const userlogin = require('./routes/login');
const userorder = require('./routes/orders');
const jwt = require('jsonwebtoken');

app.use('/orders',async(req,res,next)=>{
    console.log(req.headers);
    const token = req.headers.authorization.split('test ')[1];
    if (!token){
        return res.json({
            status:'failed',
            message:'authentication failed'
        })
    }
    jwt.verify(token,secret,async function(err,decoded){
        if(err){
            console.log(err);
            return res.json({
                status:'failed',
                message:'invalid token'
            })
        }
        const user=await  User.findOne({ id:decoded.data});
        req.body.user=user.id;
        console.log(decoded);
    })
    next();
})

app.use('/',userRoutes);
app.use('/',userlogin);
app.use('/orders',userorder);

app.listen(5000,()=>{
    console.log('server is live at 5000');
})