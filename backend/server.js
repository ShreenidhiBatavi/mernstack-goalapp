const express=require('express')
require('dotenv').config()
const port=process.env.PORT||8000
const connectDB=require('./config/db')
const goals=require('./routes/goals')
const users=require('./routes/user')
connectDB()
const app=express()
app.use(express.json())

app.use('/api/goals',goals)
app.use('/api/users',users)
app.listen(port,()=>{
    console.log(`port statrted at no  ${port}`)
})