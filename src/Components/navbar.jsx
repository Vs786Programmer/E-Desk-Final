import React from 'react'
import brandlogo from '../assets/Brandlogo.png'
import profileIcon from '../assets/profile-icon.png'

function Navbar({ onLogout }) {
  return (
    <>
      <div className="px-5 py-1.5 flex justify-between items-center h-15 bg-white">
        <img className="" src={brandlogo} alt="brandlogo" />
        <div className="flex items-center gap-4">
          <button
            onClick={onLogout}
            className="text-gray-600 hover:text-gray-800 font-semibold"
          >
            Logout
          </button>
          <div className="text-white">
            <img src={profileIcon} alt="profileIcon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
