import React, { useState,useEffect,useRef} from 'react'
import { getData } from '../api'
import { FaEdit } from 'react-icons/fa';
import { BsFillXCircleFill } from "react-icons/bs";
const GoalList = ({goal,setGoal,deleteGoal,setUpdating,setId}) => {
     
  const update=(id,text)=>{
    setUpdating(true)
    setId(id)
    setGoal(text)
  }
   
  return (
    <div className='m-5 lg:w-1/2 w-11/12 mx-auto rounded'>
       
            <div className='h-14 flex justify-between p-2 items-center border border-gray-700'>
             <div className='lg:mx-0 lg:text-lg'><span className='mr-3'>🎯</span>{goal.text}</div>
             <div className='flex'>
                 <div><FaEdit onClick={()=>{update(goal._id,goal.text)}}  className='h-10 lg:w-6  w-5 mx-4 text-green-700 cursor-pointer'/></div>
                 <div>< BsFillXCircleFill onClick={()=>deleteGoal(goal._id)} className='h-10 lg:w-6  w-5 mx-4 text-red-500 cursor-pointer'/></div>
            </div>
            </div>
       
    </div>
  )
}

export default GoalList