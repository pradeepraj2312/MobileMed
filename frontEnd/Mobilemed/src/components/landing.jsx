import React from 'react'
import { Link } from 'react-router-dom'
  
import logo1 from '../assets/image/logo1.png'
function Landing() {
  return (
    <div className='landing'>
      <div className="landing_page">
        <img src={logo1} alt="logo" />
        <p className='title1'>MobileMed</p>
        <p className='title2'>Let’s get started</p>

        <button className='login'>Login</button>
        <button className='signup'>Sign up</button>

      </div>
    </div>
  )
}

export default Landing