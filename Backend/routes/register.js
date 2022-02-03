const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser());
const User = require('../model/user');
const bcrypt = require('bcrypt');

router.post('/register',async(req,res)=>{
    try{
        const userExist = await User.findOne({Email:req.body.Email});
        const numExist = await User.findOne({Number:req.body.Number});
        console.log(req.body.Email);
        console.log(req.body.Number);
        if (!req.body.Email && !req.body.Number){
            return res.status(400).json({
                status:400,
                error:"its the error"
            })
        }else if(userExist || numExist){
            return res.status(400).json({
                status:400,
                error:"user already exist"
            });
        }else{
            const password = req.body.Password;
            const saltRounds= 10;
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                if (err){
                    console.log(err)
                    return res.status(400).json({
                        message:"invalid data"
                    })
                }else{
                    req.body.Password=hash;
                    const user = await User.create(req.body);
                    res.status(200).json({
                        status:"success",
                        data:user
                    });
                }
            })};
          
        } catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
    }   
})

// router.post("/register", async function(req, res) {
//     try {
//         const { Name, Email, Password, Address, Phone, State, District, Pincode } =
//         req.body;
//         const hash = await bcrypt.hash(Password, 10);
//         console.log(hash);
//         await User.create({
//             Name,
//             Email,
//             Password: hash,
//             Address,
//             Phone,
//             State,
//             District,
//             Pincode,
//         });
//         res.json({
//             status: "success",
//             message: "successfully signed up.",
//         });
//     } catch (e) {
//         res.json({
//             status: "failed",
//             message: e.message,
//         });
//     }
// });

router.get('/register',async(req,res)=>{
    try{
        const users = await User.find();
        res.json({
            status:"success",
            data:users
        });
    } catch(e){
        res.status(500).json({
            status:"failure",
            message:e.message
        })
    }   
})


router.delete('/:id',async(req,res)=>{
    try{
        const users = await User.deleteOne({id:req.params.id});
        res.json({
            status:"success",
            data:users
        });
    }catch(e){
        res.status(500).json({
            status:"failure",
            message:e.message
        })
    }
})




module.exports = router;