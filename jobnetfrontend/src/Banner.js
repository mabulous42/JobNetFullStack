import React from 'react'

function Banner(props) {
    return (
        <>
            <div className='banner-div'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='text-white'>{props.pageName}</h6>
                    <div className='current-page-name-div text-white'>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2'>Home</h6>
                            <h6 className='me-2'>‣</h6>
                            <h6 className='me-2'>Dashboard</h6>
                            <h6 className='me-2'>{props.Arrow}</h6>
                            <h6 className='me-2'>{props.pageDirectory}</h6>
                            <h6 className='me-2'>{props.Arrow2}</h6>
                            <h6>{props.pageDirectory2}</h6>
                        </div>
                    </div>
                    <div className='text-white toggle-btn-div'>
                        <div><i class="bi bi-list menu-icon"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner