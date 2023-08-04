import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import ContentContainer from '../ContentContainer'
import SelectSkill from '../SelectSkill'

function PostJob() {
    let userToken = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()

    const [currentUser, setcurrentUser] = useState("")

    useEffect(() => {
        const uri = "http://localhost:5353/users/employerDashboard"
        axios.get(uri, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res);
            setcurrentUser(res.data.employerName)
        }).catch((err) => {
            console.log(err)
            alert("Session Timeout")
            navigate("/employerLogin")
        })
    }, [])
    return (
        <>
            <NavBar
                PostJobBtn={
                    <Link to={"/postJob"}>
                        <button className="post-a-job-btn py-2 px-3 rounded-pill">Post a Job</button>
                    </Link>}
            />
            <SideBar
                dashboardStyle='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'
                PostJobStyle='dashboard text-white d-flex align-items-center w-100 px-2 py-3 rounded'
            />
            <ContentContainer
                postJob=
                {
                    <div>
                        <h1 className='fs-2 mb-4 my-3'>Post a New Job</h1>
                        <div className='shadow bg-white p-5 rounded-4'>
                            <form action="">
                                <h4 className='job-text mb-3'>Job Details</h4>
                                <div className='mt-4'>
                                    <h6>Job Title*</h6>
                                    <input className='w-100 job-input rounded px-3' placeholder='Ex: Product Designer' type="text" name="" id="" />
                                </div>
                                <div className='mt-4'>
                                    <h6>Job Description*</h6>
                                    <textarea className='w-100 job-input rounded px-3' placeholder='Write about the job in details...' name="" id="" cols="30" rows="6"></textarea>
                                </div>
                                <div className='mt-4 select-container'>
                                    <h6>Job Type</h6>
                                    <select name="" id="" className='w-50 job-input rounded'>
                                        <option className='form-control' value="Full Time">Full Time</option>
                                        <option className='form-control' value="Part Time">Part Time</option>
                                        <option className='form-control' value="Freelance">Freelance</option>
                                    </select>
                                </div>
                                <div className='mt-4'>
                                    <h6>Salary</h6>
                                    <div className='d-flex'>
                                        <select name="" id="" className='salary job-input rounded'>
                                            <option className='form-control' value="Monthly">Monthly</option>
                                            <option className='form-control' value="Weekly">Weekly</option>
                                        </select>
                                        <input className='mx-4 w-25 job-input rounded' placeholder='Min' type="text" name="" id="" />
                                        <input className='w-25 job-input rounded' placeholder='Max' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h6>Job Title*</h6>
                                    <input className='w-100 job-input rounded px-3' placeholder='Ex: Product Designer' type="text" name="" id="" />
                                    {/* <SelectSkill /> */}
                                </div>
                            </form>
                        </div>
                    </div>
                }
            />
        </>
    )
}

export default PostJob