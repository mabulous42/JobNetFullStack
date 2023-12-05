import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loader() {
    return (
        <>
            <div className="loader">
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={require('./image/jn-logo.png')} alt="Your Logo" className='p-2 rounded-circle' />
                </div>
            </div>
        </>
    )
}

export default Loader