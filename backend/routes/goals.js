const express=require('express')
const router=express.Router()
const goals=require('../controllers/goals')
router.get('/',goals.getGoals)
router.post('/',goals.postGoals)
router.put('/:id',goals.updateGoals)
router.delete('/:id',goals.deleteGoals)
module.exports=router