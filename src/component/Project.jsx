import React from 'react'
import ArrowRight from '../images/right-arrow.svg'

function Project() {
  return (
    <div className='project-container'>

      <div className="project">
          <h3>Project</h3>
          <div className='stroke'></div>
      </div>
      <div className="project-content">
        <h2>Upcoming IGOs</h2>
        <div className="view-more">
          <h5>View More</h5>
          <img className='right-arrow' src={ArrowRight} alt="arrow-icon" />
        </div>
      </div>
      
              
    </div>
  )
}

export default Project
