const express = require('express')
const router = express.Router()
const userSchema = require('../Models/users.js')
const {userValidation} = require('../validation.js')

router.get('/',async(req,res)=>{
    const allUsers = await userSchema.find()
    if(!allUsers){
        res.send("Something went wrong")
    }
    try{
        res.json(allUsers)
    }
    catch(err){
        res.status(404).send({err,message:"no users found"})
    }
})

router.post('/',async(req,res)=>{
    const {error} = userValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user =  await userSchema.findOne({ username: req.body.username });
    if(user) return res.status(400).send('username already exists found');
    
    const newUser = await new userSchema({username : req.body.username})
    try{
        await newUser.save()
        res.json({newUser,
            message: "user added"
        })
    }catch(err){
        res.status(400).send(err)
        console.log(err)
    }

})

module.exports = router;