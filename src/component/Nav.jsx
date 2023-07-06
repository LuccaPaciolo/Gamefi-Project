import React from 'react'
import Search from '../images/search.svg'
import Logo from '../images/logo.png'
import Hamburger from '../images/hamburger.svg'
import Wallet from '../images/wallet.svg'


function Nav() {

  return (
    <div className='nav-container'>
      <img src={Logo} className="logo" alt="logo" />
      <div className="nav-icons">
        <img src={Search} className="search-icon" alt="search-icon" />
        <img src={Hamburger} className="hamburger-icon" alt="hamburger-icon" />
        <img src={Wallet} className="search-icon"alt="wallet-icon" />
      </div>
        
      
      
    </div>
  )
}

export default Nav
