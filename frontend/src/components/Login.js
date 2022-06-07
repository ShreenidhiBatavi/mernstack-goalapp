import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postData } from '../api'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const Navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const result =await postData('api/users/login',{email,password})
            console.log(result.data)
            setEmail("")
            setPassword("")
            setError("")
            localStorage.setItem("name",result.data.name)
            localStorage.setItem("token",result.data.token)
        }catch(err){
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }
    }
    useEffect(()=>{
    if(localStorage.getItem("token"))Navigate("/dashboard")
    })
  return (
    <>
            <div className='bg-gray-100 h-screen flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-10/12 bg-white p-6 flex flex-col rounded shadow-xl items-center  mb-10'>
            {/* <h1 className='text-8xl text-gray-200'>🎯</h1> */}
            <h1 className='text-red-500 text-xl text-center'>{error}</h1>
            <h1 className='text-gray-800 text-xl font-bold m-5'>Login here </h1>
            
            <div className='flex  w-11/12 lg:w-10/2 flex-col'>
                    <label className='text-gray-800 m-2'>Email</label>
                    <input  
                    className='bg-transparent border border-gray-800 w-full p-2 text-black m-2'
                    type="Email"
                    placeholder='Enter your Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
            </div>
            <div className='flex  w-11/12 lg:w-10/2 flex-col'>
                    <label className='text-gray-800 m-2'>Password</label>
                    <input  
                    className='bg-transparent border border-gray-800 w-full p-2 text-black m-2'
                    type="password"
                    placeholder='Enter your Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            </div>
            <div className='w-11/12 pb-5 ml-0'>
            <button className='bg-gray-900 text-gray-200 w-11/12  shadow-xl font-bold text-lg w-full mt-10 h-10 rounded '>Log in</button>
            </div>
            <div className=' text-gray-700  text-center text-sm'>Don't have account ? <span className='cursor-pointer'><Link to="/register">Register</Link></span></div>
        </form>
    </div>
    </>
  )
}

export default Login