import React, { useEffect, useState,useRef } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { deleteData, getData, postData, updateData } from '../api'
import GoalList from './GoalList'
import Modal from './Modal'
import { BsFillXCircleFill } from "react-icons/bs";
import Menu from './Menu'


const Goal = () => {
    const [goal,setGoal]=useState("")
    const [show ,setShow]=useState(false)
    const [goals,setGoals]=useState([])
    const [error,setError]=useState("")
    const [updating,setUpdating]=useState(false)
    const  [menu,setMenu]=useState(false)
    const [id,setId]=useState("")
    // to submit a new goal 
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const result = await postData('api/goals',{text:goal})
            getGoals()
            setGoal("")
            setError("")
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
        }
    }
    // to get a new goal 
    const getGoals=async()=>{
        console.log('first')
          try{
            const result=  await getData('api/goals')
            console.log(result.data)
            setGoals(result.data)
          }catch(err){
              console.log(err)
          }
      }

    //   to delete a new goal
const deleteGoal=async(id)=>{
    try{
        const result=await deleteData(`api/goals/${id}`)
        getGoals()
    }catch(err){
        console.log(err)
    
    }
    
}
// to update a new goal
const updateGoal=async(e)=>{
    e.preventDefault()
    try{
        const result=await updateData(`api/goals/${id}`,{text:goal})
        setUpdating(false)
        setGoal("")
        getGoals()
    }catch(err){
        console.log(err)
    
    }

    
}

      useEffect(()=>{
          getGoals()
      },[])
     
  return (
    <div className=''>
        {menu?<Menu setMenu={setMenu}/>:null}

        <div className='flex lg:w-1/2 mx-auto justify-between items-center'>
            <div onClick={()=>setMenu(true)} className='text-2xl m-4 cursor-pointer'>🎯 Goals</div>
            <div className='m-4'>
                <button onClick={()=>setShow(!show)}  className={`${show?'bg-red-500':'bg-black'} rounded shadow-lg text-white w-20 h-10`}>{show?"Close":"Add"}</button>
            </div>
        </div>
       {show?<form onSubmit={handleSubmit} className="lg:w-1/2 w-11/12  mx-auto py-5 border border-gray-800 p-4 shadow-lg rounded">
            <div className='flex flex-col'>
                <h1 className='text-red-500 my-2 text-lg'>{error}</h1>
                <label className='text-gray-800 text-lg mb-5 lg:ml-10'>Add goal</label>
                <input 
                 placeholder='Enter Goal'
                 className='bg-transparent border border-gray-800 lg:w-3/4  p-2 lg:ml-10 placeholder:text-gray-500'
                 value={goal}
                 autoFocus={true}
                 onChange={(e)=>setGoal(e.target.value)}
                />
            </div>
            <div>
                <button className='lg:ml-10 mt-8 lg:w-3/4 w-full bg-gray-900 text-gray-200 rounde shadow-lg h-10 mb-5 '>Save</button>

            </div>
        </form>:null}
        {goals.map((goal)=><GoalList  key={goal._id} goal={goal} setGoal={setGoal}  deleteGoal={deleteGoal} setUpdating={setUpdating} setId={setId}/>)}
        {updating?<Modal>
            <form onSubmit={updateGoal} className="lg:w-1/2 relative  w-11/12 bg-white mx-auto py-5 p-4 shadow-lg rounded">
            <div className='flex flex-col'>
                <h1 className='text-red-500 my-2 text-lg'>{error}</h1>
                <div onClick={()=>setUpdating(false)} className='absolute cursor-pointer top-3 text-red-500 right-3 text-xl '><BsFillXCircleFill/></div>
                <label className='text-gray-800 text-lg mb-5 lg:ml-10'>Update Goal</label>
                <input 
                 placeholder='Enter Goal'
                 className='bg-transparent border border-gray-800 lg:w-3/4  p-2 lg:ml-10 placeholder:text-gray-500'
                 value={goal}
                 autoFocus={true}
                 required
                 onChange={(e)=>setGoal(e.target.value)}
                />
            </div>
            <div>
                <button className='lg:ml-10 mt-8 lg:w-3/4 w-full bg-gray-900 text-gray-200 rounde shadow-lg h-10 mb-5 '>Update</button>

            </div>
        </form>
        </Modal>:null}
        
    </div>
  )
}

export default Goal