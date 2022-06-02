import React from 'react'
import {Navigate} from 'react-router-dom'
 
function ProtectedRoutes({children}) {
    
    return localStorage.getItem('token')?children :<Navigate to="/"/>
}

export default ProtectedRoutes