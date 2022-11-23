import React from 'react'
import NavBar from '../NavBar'
import axios from 'axios';
import {useState} from 'react'
import {Navigate, Outlet, useNavigate} from 'react-router-dom';

function Login() {
  const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);





    // Error
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()


    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password }


        axios.post("https://reqres.in/api/login", newEntry).then(Response => {
            // console.log(Response)
            // console.log("Log In Sucessfull")
            // console.log(Response.status)
           // console.log(Response.data.token)

            if (Response.status == 200) {
                // alert("Email is Submitted")
                let token=Response.data.token;
                localStorage.setItem('token', token)
                
                navigate('/')


            }
           
        }).catch(e => {
            console.log("Error", e)
        })


        setErrors(Validation(newEntry))
        setAllEntry([...allEntry, newEntry])
        setemail('')
        setpassword('')

    }

    const Validation = (values) => {


        let errors = {}
        if (!values.email) {
            errors.email = "Email Required";
        } else if (values.email.length < 5) {
            errors.email = "Email is more than 5 required";
        }


        if (!values.password) {
            errors.password = "Password  Required";
        } else if (values.password.length < 5) {
            errors.password = "Password is More than 5 required";
        }

        // alert("Form Has Been Submitted");

        return errors;
    }

  

  return (

    
    <div>
        {/* <NavBar/> */}
        <div className='form'>

                <h1>Login Page</h1>
                <form action="" onSubmit={submitForm}>
                    <div>
                        <label htmlFor="email" className='label'>Email:</label><br />
                        <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                       
                        {errors.email && <p style={{ color: "red" }} >{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className='label'>Password:</label><br />
                        <input type="password" name="email" value={password} onChange={(e) => setpassword(e.target.value)} />
                        {errors.password && <p style={{ color: "red" }} >{errors.password}</p>}
                    </div>

                    <button type='submit' id='btn' >Log in</button>
                </form>

            </div>
            
        </div>

       

        
      
    
  )
}

export default Login
