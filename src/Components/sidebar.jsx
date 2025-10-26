import React from "react";
import { GoHome } from "react-icons/go";
import { LuLampDesk } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function sidebar() {
  return (
    <div className="w-64 h-[calc(100svh-5rem)] mt-5 flex flex-col justify-between">
      <div>
        <div className="sidebar-button">
          <GoHome className="h-7 w-auto" />
          Home
        </div>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <div className="sidebar-button">
          <LuLampDesk className="h-7 w-auto" />
          Study Desk
        </div>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <div className="sidebar-button">
          <MdOutlineLibraryBooks className="h-7 w-auto" />
          Materials
        </div>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <div className="sidebar-button">
          <MdOutlineSchool className="h-7 w-auto" />
          Courses
        </div>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
        <div className="sidebar-button">
          <MdOutlineGroup className="h-7 w-auto" />
          Community
        </div>
        <div className="h-0.5 my-0.5  bg-gray-200"></div>
      </div>

      <div >
        <div className="sidebar-button">
          <IoMdSettings className="h-7 w-auto" />
          Settings
        </div>
      
      </div>
    </div>
  );
}

export default sidebar;
