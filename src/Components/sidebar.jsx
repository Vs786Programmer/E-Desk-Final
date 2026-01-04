import React from "react";
import { GoHome } from "react-icons/go";
import { LuLampDesk } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom'

function sidebar() {
  return (
    <div className="w-70 h-[calc(100svh-5rem)] pt-5 flex flex-col justify-between bg-white">
      <div>
        <NavLink to="/" className={({isActive}) => isActive ? "sidebar-button-active" : "sidebar-button"}>
          <GoHome className="h-7 w-auto" />
          Home
        </NavLink>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <NavLink to="/study-desk" className={({isActive}) => isActive ? "sidebar-button-active" : "sidebar-button"}>
          <LuLampDesk className="h-7 w-auto" />
          Study Desk
        </NavLink>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <NavLink to="/materials" className={({isActive}) => isActive ? "sidebar-button-active" : "sidebar-button"}>
          <MdOutlineLibraryBooks className="h-7 w-auto" />
          Materials
        </NavLink>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <NavLink to="/courses" className={({isActive}) => isActive ? "sidebar-button-active" : "sidebar-button"}>
          <MdOutlineSchool className="h-7 w-auto" />
          Courses
        </NavLink>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <NavLink to="/community" className={({isActive}) => isActive ? "sidebar-button-active" : "sidebar-button"}>
          <MdOutlineGroup className="h-7 w-auto" />
          Community
        </NavLink>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
      </div>

      <div>
        <NavLink to="/settings" className={({isActive}) => isActive ? "sidebar-button-active" : "sidebar-button"}>
          <IoMdSettings className="h-7 w-auto" />
          Settings
        </NavLink>
      </div>
    </div>
  );
}

export default sidebar;
