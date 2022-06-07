import React from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {BsPersonCircle} from "react-icons/bs";

const Menu = ({setMenu}) => {
    const Navigate=useNavigate()
    function logout(){
        localStorage.removeItem("token")
        Navigate("/")
    }
  return (
    <div className='bg-black absolute inset-0 h-screen bg-opacity-75 flex justify-center items-center relative'>
        
            <div  className='absolute top-5 right-5'> <BsFillXCircleFill className='text-white text-2xl cursor-pointer' onClick={()=>setMenu(false)}/></div>

        {/* </div> */}
        <div className='flex flex-col items-center'>
            <div>
                <BsPersonCircle className='text-8xl text-white'/>
                <div className='text-center m-3 font-bold text-white'>{localStorage.getItem("name")}</div>
            </div>
            <button onClick={logout} className='bg-orange-500  font-bold flex justify-center items-center w-32 h-8 p-2 rounded'>Log out</button>
         </div>
    </div>
  )
}

export default Menu