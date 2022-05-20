const mongoose=require('mongoose')
const Goal=require('../models/goals')
const User=require('../models/user')
exports.getGoals=async(req,res)=>{
    try{
      const goals=await Goal.find({user:req.user.id})
      res.status(200).json(goals)
    }catch(err){
        console.log(err)
    }
}

exports.postGoals=async(req,res)=>{
    try{
        if(!req.body.text){
            res.status(400).json({message:'Please add a Goal'})
        }else{
            const goal=await Goal.create({
                text:req.body.text,
                user:req.user.id
            })
            res.status(201).json(goal)
        }  
      
    }catch(err){
        console.log(err)
    }
}
exports.updateGoals=async(req,res)=>{
    try{
    
        if(!req.body.text){
            console.log('first')
            res.status(400).json({message:"please add text value"})
        }
        const id=req.params.id
        console.log(id)
        const updatedGoal=await Goal.findByIdAndUpdate(id,req.body)
        res.status(201).json(updatedGoal)
    }catch(err){
        console.log(err)
    }
}
exports.deleteGoals=async(req,res)=>{
    try{
        const id=req.params.id
        console.log(id)
        const goal=await Goal.findById(id)
        console.log(goal)
        await goal.remove()
        res.status(200).json({id:req.params.id})
    }catch(err){
        console.log(err)
    }
}