import React from 'react'

function ContentContainer(props) {
  return (
    <>
        <div className='content-container overflow-auto'>
            <div className='inner-content-div'>
                {props.employerDashboard}
                {props.postJob}
            </div>
        </div>
    </>
  )
}

export default ContentContainer