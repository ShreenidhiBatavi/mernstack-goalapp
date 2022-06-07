import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getData ,postData,} from '../api'

const Register = () => {

    const [name,setName]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [error,setError]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
       try{
       const result= await postData('api/users',{name,email,password})
       setName("")
       setemail("")
       setpassword("")
       setError("")
       }catch(err){
        setError(err.response.data.message)
       }
    }
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center'>
      
        <form onSubmit={handleSubmit} className='w-10/12 bg-white flex flex-col items-center p-5 rounded shadow-xl mb-10'>
          
            <h1 className='text-red-500 text-xl text-center'>{error}</h1>
            <h1 className='text-gray-800 text-xl font-bold m-5'>Register here </h1>
            <div className='flex  w-11/12 lg:w-10/2 flex-col'>
                    <label className='text-gray-800 m-2'>Name</label>
                    <input  
                    className='bg-transparent border border-gray-800 w-full m-2 p-2 text-black'
                    type="text"
                    placeholder='Enter your Name'
                    value={name}
                    required
                    onChange={(e)=>setName(e.target.value)}
                    />
            </div>
            <div className='flex  w-11/12 lg:w-10/2 flex-col'>
                    <label className='text-gray-800 m-2'>Email</label>
                    <input  
                    className='bg-transparent border border-gray-800 w-full p-2 text-black m-2'
                    type="Email"
                    placeholder='Enter your Email'
                    value={email}
                    required
                    onChange={(e)=>setemail(e.target.value)}

                    />
            </div>
            <div className='flex  w-11/12 lg:w-10/2 flex-col'>
                    <label className='text-gray-800 m-2'>Password</label>
                    <input  
                    className='bg-transparent border border-gray-800 w-full p-2 text-black m-2'
                    type="password"
                    placeholder='Enter your Password'
                    value={password}
                    required
                    onChange={(e)=>setpassword(e.target.value)}

                    />
            </div>
            <div className='w-11/12 pb-5 ml-5'>
            <button className='bg-gray-900 shadow-xl text-gray-200 font-bold text-lg w-11/12  mt-10 h-10 rounded '>Register</button>
            </div>
            <div className=' text-gray-700  text-center text-sm'>Already Registered ? <span className='cursor-pointer'><Link to="/">Login</Link></span></div>

            
        </form>
    </div>
  )
}

export default Register