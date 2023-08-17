import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../SideBar'

function UserDashboard() {
    const userToken = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()

    const [currentUser, setcurrentUser] = useState("")
    const [allJobs, setallJobs] = useState([])
    const [userSkills, setuserSkills] = useState([])

    useEffect(() => {
        const uri = "http://localhost:5353/users/userDashboard"
        axios.get(uri, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((res) => {
            console.log(res);
            setuserSkills(res.data.skills)
            setcurrentUser(res.data)
        }).catch((err) => {
            console.log(err)
            alert("Session Timeout")
            navigate("/userLogin")
        })
    }, [])


    //fetching all the posted jobs from the database
    useEffect(() => {
        const uri = "http://localhost:5353/users/allJobs"
        axios.get(uri).then((res) => {
            console.log(res);
            let postJobs = res.data
            console.log(postJobs);
            console.log(userSkills);
            const filteredJobs = postJobs.filter(job =>
                userSkills.some(skill => job.requiredSkills.includes(skill))
            );
            setallJobs(filteredJobs)

        }).catch((err) => {
            console.log(err)
        })
    }, [userSkills])



    const showJobs = () => {
        console.log(allJobs);
        console.log(userSkills);
    }




    return (
        <>
            {/* <SideBar /> */}
            <div>
                <h1>Welcome to your dashboard, {currentUser.userName}</h1>
            </div>
            <div>
                <h3>Available Jobs</h3>
                <button onClick={showJobs} className="btn btn-warning">Jobs</button>
                {
                    allJobs.map((jobs, index) => (
                        <div className='px-3 jobs-div w-75 job-display-div' key={index}>
                            <div className='bg-white shadow px-4 py-4 rounded mb-1 w-100' >
                                <div className='d-flex mb-2'>
                                    <h5 className='me-3 job-desc-text'>{jobs.jobDescription}</h5>
                                    <div className=''>
                                        <div className='d-flex align-items-center justify-content-center job-type text-primary px-2 rounded'>
                                            <div className='me-1'>
                                                <i className="bi bi-briefcase"></i>
                                            </div>
                                            <div className='jobType-text'>{jobs.jobType}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex mb-2'>
                                    <div>
                                        <div className='d-flex shadow bg-white px-2 me-3 rounded'>
                                            <div className='me-1'>
                                                <i className="bi bi-bag-check"></i>
                                            </div>
                                            <div className='jobTitle-text'>{jobs.jobTitle}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex shadow bg-white px-2 me-3 rounded-sm'>
                                            <div className='me-1'>
                                                <i className="bi bi-calendar2"></i>
                                            </div>
                                            <div>{jobs.date}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex shadow bg-white px-2 me-3 rounded'>
                                            <div className='me-1'>
                                                <i className="bi bi-wallet"></i>
                                            </div>
                                            <div> ₦{jobs.min_salary} - ₦{jobs.max_salary} ({jobs.salaryType})</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <h6 className='me-1'>Skills: </h6>
                                    <div className='d-flex flex-wrap'>
                                        {
                                            jobs.requiredSkills.map((skill, i) => (
                                                <div className='me-1 mb-1 skill-div rounded px-2' key={i}>
                                                    <div className='d-flex skill-text'>{skill}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='mt-3 text-end'>
                                        <button className="btn btn-dark">Apply for Job</button>
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