import { useState,useEffect } from "react";
import { FaUser } from "react-icons/fa";
const Register = () => {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        cpassword:''
    })
    const {name,email,password,cpassword}=formData

    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaUser/> Register
            </h1>
         </section>
         <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                     <input 
                     className="form-control" 
                     type="text" 
                     id="name" 
                     name="name" 
                    value={name}
                    placeholder="Enter your name"
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                     <input 
                     className="form-control" 
                     type="email" 
                     id="email" 
                     name="email" 
                    value={email}
                    placeholder="Enter your email"
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                     <input 
                     className="form-control" 
                     type="password" 
                     id="password" 
                     name="password" 
                    value={password}
                    placeholder="Enter your password"
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                     <input 
                     className="form-control" 
                     type="cpassword" 
                     id="password" 
                     name="cpassword" 
                    value={cpassword}
                    placeholder="Confrim password"
                    onChange={onChange}
                />
                </div>
                <div className="from-group">
                    <button type="submit" className="btn btn-block">
                        Submit
                    </button>
                </div>
            </form>
         </section>
    </>
  )
}

export default Register