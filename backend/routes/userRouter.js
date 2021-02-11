const express = require('express');
const User = require('../models/userModel');
const router = express.Router();


router.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(user==null){
                const user = User({
                    email:req.body.email,
                    sifre:req.body.sifre
                })
                user.save()
                .then((err)=>{
                    if(err){
                        console.log(err)
                        res.json(err)
                    }else{
                        console.log(user)
                        res.json(user)
                    }
                    
                })
            }else{

            res.json({
                message:'email is not avilable'
            })   
            }
        }
    })
    
})

router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email, sifre: req.body.sifre }, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            res.json(user)
        }
    })
})

module.exports = router;