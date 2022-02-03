const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
const User = require('../model/user');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
router.use(bodyParser());
const secret = 'gulshan';
router.post('/',async(req,res)=>{
    try{
        console.log(req.body.Email);
        console.log(req.body.Password);
        const Email = req.body.Email;
        const Password = req.body.Password;
        const user = await User.findOne({"Email":Email});
        bcrypt.compare(Password,user.Password,async function(err, result) {
            if (!result){
                return res.status(400).json({
                    status:400,
                    message: "Invalid credentials"
                })
            }else{
                const usertoken=jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: user._id
                    }, secret);
                return res.json({
                    status: "successful login",
                    email : user.Email,
                    token:  usertoken
                })

            }
        });
    }catch(e){
        res.status(400).json({
            status:400,
            message:e.message
        })
    }
})

module.exports = router;