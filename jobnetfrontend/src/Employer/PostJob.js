import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import ContentContainer from '../ContentContainer'

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
                        <h4>Job Details</h4>
                    </form>
                </div>
            </div>
        }
        />
    </>
  )
}

export default PostJob