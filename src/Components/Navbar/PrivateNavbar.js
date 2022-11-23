import React from 'react'
import { Link } from 'react-router-dom'

function PrivateNavbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand text-white" to="/">Navbar</Link>
                <button className="navbar-toggler btn-primary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/about'>About</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link  text-white" to='/contact'>Contact</Link>
                        </li>
                        
                       
                      
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        
                            <button className="btn btn-outline-success my-2 my-sm-0" Link type="submit"><Link className="nav-link  text-white" to='/logout'>LogOut</Link></button>
                    </form>
                </div>
            </nav>


            
      
    </div>
  )
}

export default PrivateNavbar
