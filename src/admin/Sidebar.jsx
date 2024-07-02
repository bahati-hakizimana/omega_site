import React, { useState } from 'react';
import { FaUsers, FaRegFilePdf, FaFileExcel } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { BiSolidInstitution } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LogoImg from "../components/assets/images/AUCA_RWANDA.jpg";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdOutlinePolicy } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { GiNotebook } from "react-icons/gi";
import { CiSquareQuestion } from "react-icons/ci";
import { FaCashRegister } from "react-icons/fa";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const Sidebar_Links = [
    { id: 1, name: 'Dashboard', path: '/admin', icon: <MdDashboard /> },
    { id: 2, name: 'Students', path: '/admin/studentlist', icon: <FaUsers /> },
    { id: 6, name: 'Courses', path: '/admin/courselist', icon: <GiNotebook />},
    { id: 7, name: 'RegStudent', path: '/admin/studentregister', icon: <FaCashRegister /> },
  ];

  return (
    <div className='w-56 md:w-56 lg:w-56 fixed left-0 top-0 z-10 border-r h-screen pt-8 px-4 bg-white shadow-md transition-width duration-300'>
      <div className='mb-8 flex justify-center md:block'>
        <img src={LogoImg} alt='Logo' className='w-10 md:w-20' />
      </div>
      <ul className='mt-6 space-y-6'>
        {Sidebar_Links.map((link, index) => (
          <li key={index} className='relative'>
            <div
              className={`font-medium rounded-md py-2 px-5 hover:bg-blue-400 hover:text-white ${activeLink === index ? 'bg-blue-400 text-white' : ''}`}
              onClick={() => handleLinkClick(index)}
            >
              <div className='flex items-center justify-center md:justify-start'>
                <Link to={link.path || '#'} className='flex items-center'>
                  <span className='text-indigo-500 hover:text-white'>{link.icon}</span>
                  <span className='text-sm text-gray-500 hover:text-white  lg:inline-block ml-3'>{link.name}</span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
