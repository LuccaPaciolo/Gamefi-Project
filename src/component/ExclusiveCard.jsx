import React from 'react'

function ExclusiveCard(props) {
  return (
    <div className='exlusive-card'>
         <div className="exclusive-card">
            <div className="content-1"> 
                <img src={props.image} alt="package-icon" className='ex-image' />
                <div className="card-text">
                    <h2>{props.title}</h2>
                    <p>{props.sub}</p>
                </div>                
            </div>
            <div className="content-2">
                <img src={props.crypto} alt="crypto-icon" className='ex-icon' />
            <p>{props.time}</p>
                <p>{props.amount}</p>
            </div>
        </div>
      
    </div>
  )
}

export default ExclusiveCard
