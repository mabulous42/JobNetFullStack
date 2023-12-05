import React from 'react'

function ContentContainer(props) {
  return (
    <>
      <div>
        <div className='content-container overflow-auto'>
          <div className='inner-content-div py-2 bg-danger'>
            <div className='new-div'>
              {props.employerDashboard}
              {props.userDashboard}
              {props.postJob}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentContainer