import React from 'react'

function HworkCard(props) {
  return (
    <div className='hwork-card'>
        <img src={props.icon} className="hwork-icon" alt="icon"/>
        <h3> {props.title}</h3>
        <p>{props.text} </p>
      
    </div>
  )
}

export default HworkCard
