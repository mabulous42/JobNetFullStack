import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../SideBar'

function UserDashboard() {
    const userToken = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()

    const [currentUser, setcurrentUser] = useState("")
    const [allJobs, setallJobs] = useState([])

    useEffect(() => {
        const uri = "http://localhost:5353/users/userDashboard"
        axios.get(uri, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res);
            setcurrentUser(res.data.userName)
        }).catch((err) => {
            console.log(err)
            alert("Session Timeout")
            navigate("/userLogin")
        })
    }, [])

    useEffect(() => {
        const uri = "http://localhost:5353/users/allJobs"
        axios.get(uri).then((res) => {
            console.log(res);
            setallJobs(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const showJobs = () => {
        console.log(allJobs);
    }


    return (
        <>
            {/* <SideBar /> */}
            <div>
                <h1>Welcome to your dashboard, {currentUser}</h1>
            </div>
            <div>
                <h3>Available Jobs</h3>
                <button onClick={showJobs} className="btn btn-warning">Jobs</button>
                {
                    allJobs.map((jobs, index) => (
                        <div className='px-3'>
                            <div className='bg-white shadow px-4 py-4 rounded mb-1' key={index}>
                                <div className='d-flex mb-2'>
                                    <h5 className='me-3'>{jobs.jobDescription}</h5>
                                    <div className=''>
                                        <div className='d-flex job-type text-primary px-2'>
                                            <div className='me-1'>
                                                <i class="bi bi-briefcase"></i>
                                            </div>
                                            <div>{jobs.jobType}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex mb-2'>
                                    <div className='d-flex shadow bg-white px-2 me-3 rounded'>
                                        <div className='me-1'>
                                            <i class="bi bi-bag-check"></i>
                                        </div>
                                        <div>{jobs.jobTitle}</div>
                                    </div>
                                    <div className='d-flex shadow bg-white px-2 me-3 rounded-sm'>
                                        <div className='me-1'>
                                            <i class="bi bi-calendar2"></i>
                                        </div>
                                        <div>{jobs.date}</div>
                                    </div>
                                    <div className='d-flex shadow bg-white px-2 me-3 rounded'>
                                        <div className='me-1'>
                                            <i class="bi bi-wallet"></i>
                                        </div>
                                        <div> ₦{jobs.min_salary} - ₦{jobs.max_salary} ({jobs.salaryType})</div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex'>
                                    <div className='me-1'>Skills: </div>
                                        {
                                            jobs.requiredSkills.map((skill, i) => (
                                                <div className='me-1 bg-warning'>
                                                    <div className='d-flex'>{skill}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='mt-3 text-end'>
                                        <button className="btn btn-success">Apply for Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default UserDashboard