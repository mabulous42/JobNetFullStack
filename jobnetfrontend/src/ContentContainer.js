import React from 'react'

function ContentContainer(props) {
  return (
    <>
      <div className='content-container overflow-auto w-100'>
        <div className='cover-banner'>lorem*10</div>
        <div className='inner-content-div'>
          <div className='new-div'>
            {props.employerDashboard}
            {props.postJob}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentContainer