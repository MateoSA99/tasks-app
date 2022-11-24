import React from "react";
import freeCodeCampLogo from '../images/freecodecamp-logo.png'
import '../stylesheets/Logo.css'

const Logo = () => {
  return (
    <div className='freecodecamp-logo-container'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo' />
    </div>
  )
}

export default Logo
