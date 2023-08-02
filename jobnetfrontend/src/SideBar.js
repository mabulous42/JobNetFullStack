import React, { useState } from 'react'

function SideBar() {
  const [isDrop, setisDrop] = useState(false)

  const dropdown = () => {
    setisDrop(!isDrop)
  }
  return (
    <>
      <div className='sidebar position-absolute overflow-auto py-4'>
        <div className='bg-warning logo-div mx-auto text-center'>Logo</div>
        <div className='profile-picture-div mx-auto mt-4 rounded-circle d-flex align-items-center justify-content-center'>
          <img src={require("./image/user.png")} alt="" className='w-100' />
        </div>
        <div className='username-div mt-2 mx-auto position-relative' onClick={dropdown}>
          <h5 className='text-center'>Account Name</h5>
          <div className='position-absolute arrow-down-div'>
            <i class="bi bi-caret-down-fill"></i>
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
          <button className='dashboard text-white d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
              <img src={require("./image/dashboard.png")} alt="" className='w-100' />
            </div>
            <h5 className='mt-1 ms-3'>Dashboard</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-person fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>My Profile</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-journal fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Resume</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-envelope fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Messages</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-bell fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Job Alert</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-bookmark fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Saved Job</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-gear fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Account Settings</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
            <i class="bi bi-trash fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3'>Delete Account</h5>
          </button>
          <button className='side-menu-btn d-flex align-items-center w-100 px-2 py-3 rounded'>
            <div className='dashboard-icon-div'>
              <i class="bi bi-box-arrow-left text-danger fs-4"></i>
            </div>
            <h5 className='mt-1 ms-3 text-danger'>Sign Out</h5>
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBar