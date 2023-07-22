import React, { useState } from 'react'
import EmployerSignUp from './EmployerSignUp'
import JobSeekerSignUp from './JobSeekerSignUp'

function SignUp() {
    
    const [isVisible, setisVisible] = useState(true)

    const registerAsJobSeeker = () => {
        setisVisible(!isVisible)
    }

    return (
        <>
            <div className='body d-flex align-items-center justify-content-center'>
                <div className='shadow rounded p-4 signup-box'>
                    {/* <button onClick={showOrHide} className='btn btn-primary'>Show Element</button> */}
                    {isVisible ? <EmployerSignUp registerAsJobSeeker={registerAsJobSeeker}/> : <JobSeekerSignUp registerAsJobSeeker={registerAsJobSeeker}/>}
                </div>
            </div>
        </>
    )
}

export default SignUp