const express=require('express')
require("dotenv").config();
const port=process.env.PORT||8000
const connectDB=require('./config/db')
const goals=require('./routes/goals')
const users=require('./routes/user')
const jwt=require('./middlewares/auth')
const cors=require('cors')
connectDB()

const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/goals',jwt.jwtVerify,goals)
app.use('/api/users',users)
app.listen(port,()=>{
    console.log(`port statrted at no  ${port}`)
})