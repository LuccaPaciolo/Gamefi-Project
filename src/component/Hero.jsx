import Rocket from '../images/rocket.svg'
import Apply from '../images/apply.svg'


function Hero() {
  return (
    <div className='hero-section'>
        <h3>GAMEON</h3>
        <h1>The Next Generation Web 3.0 IGO Launchpad</h1>
        <p>Full-scale Blockchain Gaming Ecosystem for IGOs &amp; NFT Pre-Sales</p>

        <div className="hero-button">
            <button className='fill-btn'>
                <img src={Rocket} className="rocket-icon" alt="rocket-icon" />
               Explore IGOs
            </button>
            <button className='outline-btn'>
                <img src={Apply} alt="rocket-icon" className="apply-icon" />
                Apply Now
            </button>
        </div>

      
    </div>
  )
}

export default Hero
