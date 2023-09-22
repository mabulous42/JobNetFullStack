import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loader() {
    return (
        <>
            {/* <div className="circle-loader3">
                <div className="circle"></div>
            </div> */}
            <div class="loader">
                <img src={require('./image/jn-1.jpg')} alt="Your Logo" />
            </div>
        </>
    )
}

export default Loader