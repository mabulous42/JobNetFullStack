import React, { useState } from 'react'
import EmployerSignUp from './EmployerSignUp'
import JobSeekerSignUp from './JobSeekerSignUp'
import Loader from './Loader'

function SignUp() {

    const [isVisible, setisVisible] = useState(true)
    const [isLoading, setisLoading] = useState(false)

    const registerAsJobSeeker = () => {
        setisVisible(!isVisible)
    }

    console.log(isLoading);

    return (
        <>

            <div className='body d-flex align-items-center justify-content-center'>
                <div className='shadow rounded p-4 signup-box'>
                    {/* <button onClick={showOrHide} className='btn btn-primary'>Show Element</button> */}
                    {isVisible ? <EmployerSignUp registerAsJobSeeker={registerAsJobSeeker} setisLoading={setisLoading} /> 
                    : <JobSeekerSignUp registerAsJobSeeker={registerAsJobSeeker} setisLoading={setisLoading} />}
                </div>
            </div>
            {
                isLoading 
                    ?
            <div className='position-absolute loader-div w-100 d-flex align-items-center justify-content-center'>
                <Loader />
            </div>
                    :
                    null
            }
        </>
    )
}

export default SignUp