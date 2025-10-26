import React from 'react'
import brandlogo from '../assets/brandlogo.png'
import profileIcon from '../Assets/profile-icon.png'

function Navbar() {
  return (
    <>
      <div className="px-5 py-1.5 flex justify-between items-center h-15 bg-white">
        <img className="" src={brandlogo} alt="brandlogo" />
        <div className="text-white"><img src={profileIcon} alt="profileIcon" /></div>
      </div>
    </>
  );
}

export default Navbar
