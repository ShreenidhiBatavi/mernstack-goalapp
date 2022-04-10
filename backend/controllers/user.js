const jwt =require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../models/user')


exports.registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name||!email||!password){
        res.status(400).json({message:"plaease fill all the fields"})
        }
        const userExist=await User.findOne({email})
        console.log(userExist)
        if(userExist){
            res.status(400).json({message:"User alredy exist"})
        }
        const round=12
        const hashedPassword=await bcrypt.hash(password,round)
        console.log('hp',hashedPassword)
        const user=await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({name,email})
    } catch (err) {
        console.log(err)   
    }
}

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        console.log(req.body)
        const user=await User.findOne({email})
        console.log(user)
        if(user){
            const status=await bcrypt.compare(password,user.password)
            if(status){
                const token=jwt.sign({id:user._id},"harekrishna")
              res.status(200).json({name:user.name,token})
            }else{
                res.status(400).json({message:"Wrong combination of username/password"})
            }

            
        }
        else{
            res.status(400).json({message:"NO User Exists"})
        }
    } catch (error) {
        console.log(error)
    }
}