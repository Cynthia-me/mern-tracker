const express = require('express')
const exercise = require('../Models/exercise.js')
const router = express.Router()
const exerciseSchema = require('../Models/exercise.js')
const {exerciseValidation} = require('../validation.js')

router.get('/',async(req,res)=>{
    const allexercises = await exerciseSchema.find()
    if(!allexercises){
        res.send("Something went wrong")
    }
    try{
        res.json(allexercises)
    }
    catch(err){
        res.status(404).send({err,message:"no exercises found"})
    }
})

router.post('/',async(req,res)=>{
    const {error} = exerciseValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const newexercise = await new exerciseSchema({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    })
    try{
        await newexercise.save()
        res.json({newexercise,
            message: "exercise added"
        })
    }catch(err){
        res.status(400).send(err)
    }

})

router.get('/:id',async (req,res)=>{
    const exercise = await exerciseSchema.findById(req.params.id)
    try{
            res.status(200).json(exercise)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.delete('/:id',async (req,res)=>{
    const exercise = await exerciseSchema.findByIdAndDelete(req.params.id)
    try{
            res.status(200).json({exercise,
            message: "this exercise has been deleted"})
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.put('/:id',async (req,res)=>{
    const exercise = await exerciseSchema.findById(req.params.id)
    try{
            {
            exercise.username=req.body.username,
            exercise.description= req.body.description,
            exercise.duration=req.body.duration,
            exercise.date = req.body.date
        }

        exercise.save()
        try{
            res.status(200).send("exercise updated")
        }
        catch(err){
            res.status(400).json(err)
        }
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;