import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { router } from '../Router/Router';
import SpinnerLoader from '../SpinnerLoader';
import Loader from '../Loader';

function UserLogin() {
    const navigate = useNavigate()

    const [isSpinning, setisSpinning] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const onSubmit = (values) => {
        setisLoading(true)
        console.log(values);
        const uri = `${router}/users/userLogin`
        axios.post(uri, values).then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.token))
            alert("Login Successful")
            setisLoading(false)
            navigate("/jobSeekerDashboard")
        }).catch((err) => {
            console.log(err);
            alert(err.response.data.message)
            setisLoading(false)
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

    const loginAsEmployer = () => {
        setisSpinning(!isSpinning)
        setTimeout(() => {
            setisSpinning(!isSpinning)
            navigate("/employerLogin")
        }, 1500);
    }

    const registerAsJobSeeker = () => {
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
                    <div className='site-logo-div mx-auto'>
                        <img src={require('../image/jnn.png')} alt="" className='w-100' />
                    </div>
                    <form onSubmit={handleSubmit} action="">
                        <h4 className='mx-auto text-muted text-center mt-1'>Login as Job Seeker</h4>
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
                            <small className='mx-auto'>To login as an Employer, <span onClick={loginAsEmployer} className='text-primary job-seeker'>Click here</span></small>
                        </div>
                        <div className='d-flex mt-2'>
                            <small className='mx-auto no-account-yet'>Don't have an Account Yet? <span onClick={registerAsJobSeeker} className='text-primary job-seeker'>Register here</span></small>
                        </div>
                    </form>
                    <div className='position-absolute small-loader w-100 start-0'>
                        {isSpinning ? <SpinnerLoader /> : null}
                    </div>
                </div>
                {
                    isLoading
                        ?
                        <div className='position-absolute loader-div w-100 d-flex align-items-center justify-content-center'>
                            <Loader />
                        </div>
                        :
                        null
                }
            </div>
        </>
    )
}

export default UserLogin