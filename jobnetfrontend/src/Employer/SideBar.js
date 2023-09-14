import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SideBar(props) {
  const [isDrop, setisDrop] = useState(false)

  const dropdown = () => {
    setisDrop(!isDrop)
  }

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
      setcurrentUser(res.data)
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
      <div className='sidebar position-absolute overflow-auto py-4'>
        <h5 className='text-center employer-dashboard-text fw-bold'>Employer Dashboard</h5>
        <div className='profile-picture-div mx-auto mt-4 rounded-circle d-flex align-items-center justify-content-center'>
          <img src={require("../image/user.png")} alt="" className='w-100' />
        </div>
        <div className='username-div mt-2 mx-auto position-relative' onClick={dropdown}>
          <div className='d-flex justify-content-center'>
            <h5 className='text-center'>{currentUser.employerName}</h5>
            <div className='arrow-down-div ms-1'>
              <i class="bi bi-caret-down-fill"></i>
            </div>
          </div>
          {isDrop ?
            <div className='position-absolute shadow bg-white w-100 rounded py-3'>
              <button className='d-flex align-items-center drop-btn w-100 rounded py-1'>
                <i className="bi bi-person-circle me-3 ps-4"></i>
                <h6 className='mt-1'>Profile</h6>
              </button>
              <button className='d-flex align-items-center drop-btn w-100 rounded py-1'>
                <i className="bi bi-gear me-3 ps-4"></i>
                <h6 className='mt-1'>Account Settings</h6>
              </button>
              <button className='d-flex align-items-center drop-btn w-100 rounded py-1'>
                <i class="bi bi-bell me-3 ps-4"></i>
                <h6 className='mt-1'>Notification</h6>
              </button>
            </div>
            :
            null
          }
        </div>
        <div className='mt-4 side-menu-div mx-auto'>
          <Link to={"/employerDashboard"} className='link'>
            <button className={props.dashboardStyle}>
              <div className='dashboard-icon-div'>
                <i class="bi bi-ui-checks-grid fs-4"></i>
              </div>
              <h5 className='mt-1 ms-3'>Dashboard</h5>
            </button>
          </Link>
          <button className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-person fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>My Profile</h5>
          </button>
          <Link to={"/postJob"} className='link'>
            <button className={props.PostJobStyle}>
              <div className='dashboard-icon-div'>
                <i class="bi bi-pencil fs-4"></i>
              </div>
              <h5 className='mt-1 ms-3'>Post a Job</h5>
            </button>
          </Link>
          <Link to={"/manage_jobs"} className='link'>
          <button className={props.manageJobsStyle}>
            <div className='dashboard-icon-div'>
              <i class="bi bi-bell fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Manage Jobs</h5>
          </button>
          </Link>
          <button className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-journal fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Resume</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-envelope fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Messages</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-bookmark fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Saved Job</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-gear fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Account Settings</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-trash fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Delete Account</h5>
          </button>
          <button onClick={signOut} className='side-menu-btn d-flex align-items-center w-100 px-4 py-2 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-box-arrow-left text-white fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3 text-white'>Sign Out</h5>
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBar