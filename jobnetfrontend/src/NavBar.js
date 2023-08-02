import React from 'react'

function NavBar() {
    return (
        <>
            <div className='navbar fixed-top'>
                <div className='w-100 d-flex justify-content-end'>
                    <div className='position-relative me-3 d-flex align-items-center justify-content-center'>
                        <input className='search-input rounded-pill py-2' placeholder='Search here...' type="text" name="" id="" />
                        <div className='position-absolute search-icon-div'><i class="bi bi-search"></i></div>
                    </div>
                    <div className='me-3'>
                        <i class="bi bi-bell fs-3"></i>
                    </div>
                    <div className='me-3'>
                        <button className="post-a-job-btn py-2 px-3 rounded-pill">Post a Job</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar