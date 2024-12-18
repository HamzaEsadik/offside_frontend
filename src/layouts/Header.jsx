import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import logo from '../assets/images/logo.png';


function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    navigate(`/`);
  };

  const handleAboutClick = () => {
    navigate(`/about-us`);
  };

  return (
    <header className="top-0 max-w-[1500px] m-auto bg-transparent z-50">
      <div className="px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white hover:cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="OFFSIDE" className='h-8'/>
        </div>

        <button
          className="text-white focus:outline-none relative"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <BiMenu className='text-2xl'/>
          {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-8 right-0 bg-menu shadow-lg rounded-md w-60 z-50">
                <ul className="flex flex-col gap-2 p-4">
                  <li className="">
                    <div
                      onClick={handleLogoClick}
                      className="block px-4 py-2 text-p text-text text-center hover:bg-cardHeader rounded-sm"
                    >
                      HomePage
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={handleAboutClick}
                      className="block px-4 py-2 text-p text-text text-center hover:bg-cardHeader rounded-sm"
                    >
                      AboutUs
                    </div>
                  </li>
                </ul>
              </div>
            )}
        </button>
      </div>
    </header>
  )
}

export default Header