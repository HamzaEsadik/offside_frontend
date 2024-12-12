import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 max-w-[1500px] m-auto bg-transparent z-50">
      <div className="px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white hover:cursor-pointer">
          <img src="src/assets/images/logo.png" alt="OFFSIDE" className='h-8'/>
        </div>

        {/* Menu Icon */}
        <button
          className="text-white focus:outline-none relative"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <BiMenu className='text-2xl'/>
          {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-8 right-0 bg-menu shadow-lg rounded-md w-60">
                <ul className="flex flex-col gap-2 p-4">
                  <li className="">
                    <a
                      href="#"
                      className="block px-4 py-2 text-p text-text text-center hover:bg-cardHeader rounded-sm"
                    >
                      HomePage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-p text-text text-center hover:bg-cardHeader rounded-sm"
                    >
                      AboutUs
                    </a>
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