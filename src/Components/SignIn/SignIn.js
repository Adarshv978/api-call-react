import React from 'react'
import { useFormik } from 'formik';
import { singnUpSchema } from './FormValidation';
import './SignIn.css'

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function SignIn() {
  const { values, errors,  handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: singnUpSchema,


    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  })
  // console.log(Formik)

  // console.log("Error", errors)


  


  return (
    < div >

      {/* <h1>This is The Sign In Page</h1> */}

      <div className='form'>

        <h1>Form Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname" className='label'>First Name:</label><br />
            <input type="text" name="fname" id="fname" placeholder='First Name'
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}

            />
            {<p>{errors.fname}</p>}

          </div>
          <div>
            <label htmlFor="lname" className='label'>Last Name:</label><br />
            <input type="text" name="lname" id="lname" placeholder='Last Name'
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur} />
            {<p>{errors.lname}</p>}

          </div>
          <div>
            <label htmlFor="email" className='label'>Email:</label><br />
            <input type="email" name="email" id="email" placeholder='Email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} />
            {<p>{errors.email}</p>}

          </div>
          <div>
            <label htmlFor="password" className='label'>Password:</label><br />
            <input type="password" name="password" id="password" placeholder='Enter Your Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur} />
            {<p>{errors.password}</p>}

          </div>
          <div>
            <label htmlFor="password" className='label'>Confirm Passwod:</label><br />
            <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password'
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur} />
            {<p>{errors.confirmpassword}</p>}

          </div>


          <button type='submit' id='btn'>Log in</button>
        </form>

      </div>


    </div >
  )
}

export default SignIn
