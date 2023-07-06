

function Project2Card(props) {
  return (
    <div className="project2Card">
        <div>
            <img src={props.icon} className = "project2-icon" />
        </div>
        <div className="project2-text">
            <h2>{props.title}</h2>
            <p>{props.text} </p>
        </div>
      
    </div>
  )
}

export default Project2Card

