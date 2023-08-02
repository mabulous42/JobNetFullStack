import React from 'react'

function ContentContainer(props) {
  return (
    <>
        <div className='content-container overflow-auto'>
            <div className='inner-content-div'>
                {props.employerDashboard}
            </div>
        </div>
    </>
  )
}

export default ContentContainer