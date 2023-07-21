import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [confirmPassword, setconfirmPassword] = useState("")
    const onSubmit = (values, errors) => {
        if (values.password !== values.confirmPassword) {
            alert("Password does not matched")
            return
        } else {
            const uri = "http://localhost:5353/users/registerAsEmployer"
            axios.post(uri, values).then((res)=>{
                console.log(res);
                alert(res.data.message)
                // navigate("/signIn")
            }).catch((err)=>{
                console.log(err);
                alert(err.response.data.message)
            })            
        }
    }

    const { handleSubmit, handleChange, errors, touched, handleBlur, values } = useFormik({
        initialValues: {
            employerName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: yup.object().shape({
            employerName: yup.string()
                .required("This input cannot be empty")
                .min(5, "cannot be less than 5 characters"),
            email: yup.string()
                .email()
                .required("This input cannot be empty"),
            password: yup.string().required("This input cannot be empty")
                .min(8, "should be at least 8 characters"),
            confirmPassword: yup.string().required("This input cannot be empty")
                .min(8, "should be at least 8 characters")
        }),
        onSubmit
    })

    return (
        <>
            <div className='body d-flex align-items-center justify-content-center'>
                <div className='shadow rounded p-4 signup-box'>
                    <form action="" onSubmit={handleSubmit}>
                        <h4 className='text-center py-2'>Register as an Employer</h4>
                        <div className='my-3'>
                            <input type="text" onBlur={handleBlur} value={values.employerName} onChange={handleChange} placeholder='Employer Name' name="employerName" className='form-control' />
                            {touched.employerName && errors.employerName &&
                                <small className='text-danger fw-bold'>{errors.employerName}</small>
                            }
                        </div>
                        <div className='my-3'>
                            <input type="email" onBlur={handleBlur} value={values.email} onChange={handleChange} placeholder='Employer Email' name="email" className='form-control' />
                            {touched.email && errors.email &&
                                <small className='text-danger fw-bold'>{errors.email}</small>
                            }
                        </div>
                        <div className='my-3'>
                            <input type="password" onBlur={handleBlur} value={values.password} onChange={handleChange} placeholder='Password' name="password" className='form-control' />
                            {touched.password && errors.password &&
                                <small className='text-danger fw-bold'>{errors.password}</small>
                            }
                        </div>
                        <div className='my-3'>
                            <input type="password" onBlur={handleBlur} value={values.confirmPassword} onChange={handleChange} placeholder='Confirm Password' name="confirmPassword" className='form-control' />
                            {touched.confirmPassword && errors.confirmPassword &&
                                <small className='text-danger fw-bold'>{errors.confirmPassword}</small>
                            }
                        </div>
                        <div className='d-flex'>
                            <div>
                                <input className='check-box' type="checkbox" name="" id="" />
                            </div>
                            <p className='ms-2 terms'>I agree with JobNet's Terms of Service, Privacy Policy, and default Notification Settings.</p>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-success'>Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp