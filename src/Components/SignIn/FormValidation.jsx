import * as Yup from 'yup';

export const singnUpSchema=Yup.object({
    
    fname: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    lname: Yup.string().min(2).max(25).required("Please Last Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),
});