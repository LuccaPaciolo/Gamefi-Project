import Logo from '../images/logo.png'
import Facebook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Linkedin from '../images/linkedin.svg'
import UpArrow from '../images/up_arrow.svg'
import Navbar from './Nav'



function Footer() {
  return (
    <div className="footer">
        <img src={Logo} alt="logo" className="footer-logo" />
        <div className="social-container">
            <img src={Facebook} alt="facebook-icon"  className='footer-icon' />
            <img src={Twitter} alt="twitter-icon" />
            <img src={Linkedin} alt="linkedin-icon" />
        </div>

        <div className="footer-list">
            <ul>
                <li>Features</li>
                <li>Roadmap</li>
                <li>How it Works</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="copy-write">
            <p>cc 2022 Gameon, All Rigts Reserved By </p>
            <span><p>Themland</p></span>
        </div>

        <div className="return">   
            <a href="#"> <img src={UpArrow} alt="up-arrow" className='return-arrow'/></a>              

            
        </div>
      
    </div>
  )
}

export default Footer
