import { Navigate, Outlet } from 'react-router-dom'
import PrivateNavbar from './Navbar/PrivateNavbar'
const Protected = () => {
    let getToken = localStorage.getItem("token")
    let auth = {'token':getToken}
    console.log(auth)
    return(
        <>
        <PrivateNavbar/>
        
        {auth.token? <Outlet />:<Navigate to="/login" />} 
        </>
    )
}
export default Protected;