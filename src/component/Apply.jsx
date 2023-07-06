import React from 'react'
import ApplyHand from '../images/cta_thumb.png'
import Rocket from '../images/rocket.svg'

function Apply() {
  return (
    <div className='apply-card apply-overflow'>
        <img src={ApplyHand} alt="hand" className='apply-image' />
        <h2>Apply for IGO</h2>
        <p>Get access to huge set of tools to seamlessly handle your game's integration with blockchain. </p>

        <button className='btn'>
            <img src={Rocket} alt="rocket"  className='btn-rocket'/>
            <h4>Apply Now</h4>

        </button>
      
    </div>
  )
}

export default Apply
