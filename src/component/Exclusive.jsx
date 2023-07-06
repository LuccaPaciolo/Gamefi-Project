import React from 'react'
import Arrow from  '../images/right-arrow.svg'
function Exclusive(props) {
  return (
    <div className='exclusive-container'>

        <div className="ex-text">
            <h2>Exclusive</h2>
            <div></div>
        </div>

        <div className="igo-text">
            <h1>Previous IGO</h1>

            <div className="view">
                <h5>View All</h5>
                <img src={Arrow} alt="arrow-icon" />                
            </div>       
            
        </div>    
      
    </div>
  )
}

export default Exclusive
