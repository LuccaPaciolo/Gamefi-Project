

function CreativeCard(props) {
  return (
    <div className='creative-card'>
        <div className="creative-card-content">
            <img src= {props.image} className="team" alt="images"/>
            <h2>{props.name}e</h2>
            <p>{props.title}</p>
        </div>

        <div className="social">
            <img src={props.face} className='social-icons' alt="icon" />
            <img src={props.link} className='social-icons'alt="icon" />
            <img src={props.twi} className='social-icons'alt="icon" />
        </div>

      
    </div>
  )
}

export default CreativeCard
