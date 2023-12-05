import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from '../NavBar'
import ContentContainer from '../ContentContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployer } from '../Functions/GetData'
import Banner from '../Banner'

function EmployerDashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [currentEmployer, setcurrentEmployer] = useState("")

    const { isFetching, UserDetails, fetchErr } = useSelector((state) => state.CurrentUserSlice)
    console.log(UserDetails);

    useEffect(() => {
        getEmployer(dispatch)
    }, [])

    return (
        <>
            <NavBar
                PostJobBtn={
                    <Link to={"/postJob"}>
                        <button className="post-a-job-btn py-1 px-2 rounded-pill">Post a Job</button>
                    </Link>}
            />
            <Banner 
                pageName="Dashboard"
            />
            <SideBar
                dashboardStyle='dashboard text-dark d-flex align-items-center w-100 px-4 py-1 rounded'
                PostJobStyle='side-menu-btn d-flex align-items-center w-100 px-4 py-1 rounded'
                manageJobsStyle='side-menu-btn d-flex align-items-center w-100 px-4 py-1 rounded'
            />

            <ContentContainer
                employerDashboard={
                    <div>
                        <div className='parent-box bg-danger'>
                            <div className='box bg-white'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='w-100 mx-auto'>
                                        <div className='mb-3 d-flex align-items-center justify-content-center w-100'>
                                            <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                                <i class="bi bi-pencil-square fs-5"></i>
                                            </div>
                                        </div>
                                        <div className='text-center w-100 box-text'>
                                            <h4 className='mb-0'>1502</h4>
                                            <h6 className='text-center text-muted'>Total Visitor</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box bg-white'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='w-100 mx-auto'>
                                        <div className='mb-3 d-flex align-items-center justify-content-center w-100'>
                                            <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                                <i class="bi bi-pencil-square fs-4"></i>
                                            </div>
                                        </div>
                                        <div className='text-center w-100 box-text'>
                                            <h4 className='mb-0'>1502</h4>
                                            <h6 className='text-center text-muted'>Posted Jobs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box bg-white'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='w-100 mx-auto'>
                                        <div className='mb-3 d-flex align-items-center justify-content-center w-100'>
                                            <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                                <i class="bi bi-bookmarks fs-4"></i>
                                            </div>
                                        </div>
                                        <div className='text-center w-100 box-text'>
                                            <h4 className='mb-0'>15</h4>
                                            <h6 className='text-center text-muted'>Applied Jobs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box bg-white'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='w-100 mx-auto'>
                                        <div className='mb-3 d-flex align-items-center justify-content-center w-100'>
                                            <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                                <i class="bi bi-eye fs-4"></i>
                                            </div>
                                        </div>
                                        <div className='text-center w-100 box-text'>
                                            <h4 className='mb-0'>1502</h4>
                                            <h6 className='text-center text-muted'>Views</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box bg-white'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='w-100 mx-auto'>
                                        <div className='mb-3 d-flex align-items-center justify-content-center w-100'>
                                            <div className='icn-div d-flex align-items-center justify-content-center rounded-circle'>
                                                <i class="bi bi-pencil-square fs-4"></i>
                                            </div>
                                        </div>
                                        <div className='text-center w-100 box-text'>
                                            <h4 className='mb-0'>1502</h4>
                                            <h6 className='text-center text-muted'>Favourite Jobs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white recently-applied-job-div'>
                            <h5 className='py-2'>Recent Received Applications</h5>
                            <hr className='mt-0' />
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                            <div>lorem*5</div>
                        </div>
                    </div>
                }
            />

        </>
    )
}

export default EmployerDashboard