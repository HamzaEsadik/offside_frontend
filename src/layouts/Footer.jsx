import React from 'react'
import { BiLogoTwitter, BiLogoInstagram, BiLogoFacebook} from "react-icons/bi";
import { Link } from 'react-router-dom';
import small_logo from '../assets/images/small_logo.png';

function Footer() {
  return (
    <div className="buttom-0 w-full bg-cardHeader z-50 text-text">
      <div className="px-4 flex justify-around items-center h-72 flex-col pt-10 pb-0">
        <div className='max-w-[1280px] w-full h-32 flex justify-between'>
          <div className='h-24 flex gap-6 items-center'>
            <img src={small_logo} alt="OFFSIDE" className='h-full'/>
            <div>
              <h3 className='text-lg md:text-3xl'>Always in the Action</h3>
              <h3 className='text-lg md:text-3xl'>Live Scores and Exclusive News!</h3>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3'>
            <BiLogoTwitter className='text-2xl text-text hover:cursor-pointer'/>
            <BiLogoInstagram className='text-2xl text-text hover:cursor-pointer'/>
            <BiLogoFacebook className='text-2xl text-text hover:cursor-pointer'/>
          </div>
        </div>
        <div className='w-full h-10 flex flex-col md:flex-row justify-between md:items-center'>
          <div>
            <p className='text-xs'>© Copyright 2024 Offside</p>
          </div>
          <div className='flex gap-3'>
            <Link to='/about-us' className='text-xs'>About us</Link>
            <Link to='/terms' className='text-xs'>Terms of use</Link>
            <Link to='/cookie' className='text-xs'>Cookie policy</Link>
            <Link to='/privacy' className='text-xs'>Privacy policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer