const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb://localhost:27017/goals")
        console.log('db connection done')
    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB