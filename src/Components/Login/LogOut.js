import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'


function LogOut() {
    
    const navigate=useNavigate()

    let logout=localStorage.clear();  
  return ( logout ? <Navigate to='/'/>:<Navigate to='/login'/>)
    
  
}

export default LogOut
