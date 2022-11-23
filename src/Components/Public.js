import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PublicNavbar from './Navbar/PublicNavbar';

function Public() {
  const token = localStorage.getItem('token');
  return (
    <>
      <PublicNavbar />
      {token ? <Navigate to='/' /> : <Outlet />}
    </>



  )
}

export default Public
