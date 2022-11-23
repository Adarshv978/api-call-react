import React from 'react'
import { Navigate} from 'react-router-dom'


function LogOut() {


  let logout = localStorage.clear();
  return (logout ? <Navigate to='/' /> : <Navigate to='/login' />)


}

export default LogOut
