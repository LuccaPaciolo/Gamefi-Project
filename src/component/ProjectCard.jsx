import Twitter from '../images/twitter.svg'
import Telegram from '../images/telegram.svg'
import Internet from '../images/internet.svg'
import Discord from '../images/discord.svg'

function ProjectCard(props) {    
  return (
    <div className=' project-card'>

        <div className="first-section">
            <img className='thumb' src={props.image}alt="icon" />
            <div className="name">
                <h3>MetaVerse 3D</h3>
                <p>Registration in:</p>
            </div>
            <img src={props.wallet} alt="icon" />
        </div>
        <div className="second-section">
            <p><span>Total raise</span> 100K</p>
            <p><span>Value</span> {props.value} </p>
            <p><span>Min Allo</span> $0</p>
        </div>

        <div className="bar-rate">   
            
            <div className="progress-bar">
                <div className="bar" style={{width: props.rate}}> 

                    <p className='rating'>{props.rate}</p>                
                
                </div>         
                  
               
                
            </div>         
        
         

        </div>

        <div className="third-section">
            
            <div className="amount">
                <p>0/100,069 MECHA</p>
                <p>0 BUSD</p>
            </div>
        </div>        

        <div className="last-section">
            <button className='part-btn'>Participation</button>
            <div className="social-icons">
                <img src={Twitter} alt="twitter-icon" />
                <img src={Telegram} alt="telegram-icon" />
                <img src={Internet} alt="internet-icon" />
                <img src={Discord} alt="discord-icon" />
            </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
