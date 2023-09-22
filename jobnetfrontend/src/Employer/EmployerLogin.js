import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { router } from '../Router/Router';
import SpinnerLoader from '../SpinnerLoader';

function EmployerLogin() {
    const navigate = useNavigate()

    const [isVisible, setisVisible] = useState(true)
    const [isLoading, setisLoading] = useState(false)
    const [isSpinning, setisSpinning] = useState(false)

    const onSubmit = (values) => {
        console.log(values);
        const uri = `${router}/users/employerLogin`
        axios.post(uri, values).then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.token))
            alert("Login Successful")
            navigate("/employerDashboard")
        }).catch((err) => {
            console.log(err);
            // alert(err.response.data.message)
        })
    }

    const { handleSubmit, handleChange, errors, touched, handleBlur, values } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email()
                .required("This input cannot be empty"),
            password: yup.string().required("This input cannot be empty")
                .min(8, "should be at least 8 characters")
        }),
        onSubmit
    })

    const loginAsJobSeeker = () => {
        setisSpinning(!isSpinning)
        setTimeout(() => {
            setisSpinning(!isSpinning)
            navigate("/userLogin")
        }, 1500);
    }

    const registerAsEmployer = () => {
        setisSpinning(!isSpinning)
        setTimeout(() => {
            setisSpinning(!isSpinning)
            navigate("/")
        }, 1500);
    }

    return (
        <>
            <div className='body d-flex align-items-center justify-content-center'>
                <div className='shadow rounded p-4 signup-box position-relative'>
                    <form onSubmit={handleSubmit} action="">
                        <h3 className='mx-auto text-muted text-center'>Employer Login</h3>
                        <div className='my-3'>
                            <input type="email" onBlur={handleBlur} name='email' value={values.email} onChange={handleChange} placeholder='Email' className={errors.email ? "is-invalid form-control" : "form-control"} />
                            {touched.email && errors.email &&
                                <small className='text-danger fw-bold'>{errors.email}</small>
                            }
                        </div>
                        <div className='my-3'>
                            <input type="password" onBlur={handleBlur} name='password' value={values.password} onChange={handleChange} placeholder='Password' className={errors.password ? "is-invalid form-control" : "form-control"} />
                            {touched.password && errors.password &&
                                <small className='text-danger fw-bold'>{errors.password}</small>
                            }
                        </div>
                        <div className='mx-auto col-4 d-flex align-items-center justify-content-center'>
                            <button type='submit' className="btn btn-primary mx-auto">Sign In</button>
                        </div>
                        <div className='d-flex mt-2'>
                            <small className='mx-auto'>To login as Job Seeker, <span onClick={loginAsJobSeeker} className='text-primary job-seeker'>Click here</span></small>
                        </div>
                        <div className='d-flex mt-2'>
                            <small className='mx-auto'>Don't have an Account Yet? <span onClick={registerAsEmployer} className='text-primary job-seeker'>Register here</span></small>
                        </div>
                    </form>
                    <div className='position-absolute small-loader w-100'>
                        {isSpinning ? <SpinnerLoader /> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployerLogin