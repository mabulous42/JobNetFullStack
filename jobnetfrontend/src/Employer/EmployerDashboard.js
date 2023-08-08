import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from '../SideBar'
import NavBar from '../NavBar'
import ContentContainer from '../ContentContainer'

function EmployerDashboard() {
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

    const signOut = () => {
        localStorage.removeItem("token")
        navigate("/employerLogin")
    }
    return (
        <>
            <NavBar 
            PostJobBtn={
            <Link to={"/postJob"}>
                <button className="post-a-job-btn py-2 px-3 rounded-pill">Post a Job</button>
            </Link>}
            />
            <SideBar 
            dashboardStyle='dashboard text-white d-flex align-items-center w-100 px-2 py-3 rounded'
            PostJobStyle='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'
            />
            <ContentContainer
                employerDashboard={
                    <div className='mt-4'>
                        <h1 className='mb-4'>Dashboard</h1>
                        <div className='mt-3 mb-5 d-flex align-items-center justify-content-evenly parent-box'>
                            <div className='box shadow bg-white mb-2 p-2 px-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <h1>1.7k+</h1>
                                        <p className='text-muted'>Total Visitor</p>
                                    </div>
                                    <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                        <i class="bi bi-pencil-square fs-4"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='box shadow bg-white mb-2 p-2 px-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <h1>100</h1>
                                        <p className='text-muted'>Posted Jobs</p>
                                    </div>
                                    <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                        <i class="bi bi-pencil-square fs-4"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='box shadow bg-white mb-2 p-2 px-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <h1>1</h1>
                                        <p className='text-muted'>Applied Jobs</p>
                                    </div>
                                    <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                        <i class="bi bi-bookmarks fs-4"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='box shadow bg-white mb-2 p-2 px-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <h1>2.5k+</h1>
                                        <p className='text-muted'>Views</p>
                                    </div>
                                    <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                        <i class="bi bi-eye fs-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='chart-div'>
                            <div className='profile-view-inner-div'>
                                <div className='bg-white profile-view-div rounded-4'>
                                    <h4 className='px-4 py-2'>Profile View</h4>
                                    <hr className='mt-0' />
                                    <img src={require("../image/main-graph.png")} alt="" className='w-100 p-5' />
                                </div>
                                <div className='bg-white recently-applied-job-div rounded-4'>
                                    <h4 className='px-4 py-2'>Recent Applied Job</h4>
                                    <hr className='mt-0' />
                                    <div>lorem*5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                } />
            {/* <div className='d-flex align-items-center'>
                <h1>Welcome to the Employer Dashboard, {currentUser}</h1>
                <div className='ms-3'>
                    <button onClick={signOut} className="btn btn-danger">Sign Out</button>
                </div>
            </div>
            <Link to={"/postJob"}>
                <button className="btn btn-success">Post Job</button>
            </Link> */}
        </>
    )
}

export default EmployerDashboard