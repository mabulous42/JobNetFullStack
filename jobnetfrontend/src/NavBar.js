import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <>
            <div className='navbar fixed-top py-3'>
                <div className='w-100 d-flex align-items-center justify-content-between'>
                    <Link to={"/employerDashboard"}>
                        <div className='logo-div mx-auto text-center'>
                            <img src={require("./image/jnn.png")} alt="" className='w-75' />
                        </div>
                    </Link>
                    <div>
                        <p>{props.userName}</p>
                    </div>
                    <div className='d-flex'>
                        <div className='position-relative me-3 d-flex align-items-center justify-content-center'>
                            <input className='search-input rounded-pill py-2' placeholder='Search here...' type="text" name="" id="" />
                            <div className='position-absolute search-icon-div'><i className="bi bi-search search-icon"></i></div>
                        </div>
                        <div className='me-3 mt-1'>
                            <i class="bi bi-bell fs-3"></i>
                        </div>
                        <div className='me-3 post-job-btn'>
                            {props.PostJobBtn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar