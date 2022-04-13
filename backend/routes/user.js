const express=require('express')
const router=express.Router()
const user=require('../controllers/user')
router.post('/',user.registerUser)
router.post('/login',user.loginUser)
// router.get('/me',user.getMe)

module.exports=router