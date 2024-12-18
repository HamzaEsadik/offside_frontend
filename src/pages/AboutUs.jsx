import React from 'react'
import { lazy } from 'react'

const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

function AboutUs() {
  return (
    <div>
      <Header/>
      <section className='px-4 py-12 flex flex-col gap-6'>
        <h2>About us</h2>
        <p className='text-lg'>Welcome to Offside, your ultimate destination for all things soccer! Whether you're a passionate fan, a casual viewer, or just diving into the world of the beautiful game, we are here to keep you connected to the action.</p>
        <div className='pl-4'>
          <ul className='text-lg'>
            At Offside, we provide:
            <li className='list-disc'>
              <p><span className='font-bold'>Live Scores & Results:</span> Stay up-to-date with real-time match updates, from local leagues to international tournaments.</p>
            </li>
            <li className='list-disc'>
              <p><span className='font-bold'>Comprehensive Match Details:</span> Access in-depth stats, team lineups, match highlights, and post-game analysis.</p>
            </li>
            <li className='list-disc'>
              <p><span className='font-bold'>Breaking Soccer News:</span> Never miss a beat with the latest headlines, transfer rumors, and exclusive stories from the world of soccer.</p>
            </li>
            <li className='list-disc'>
              <p><span className='font-bold'>League Insights:</span> Explore standings, schedules, and insights from leagues around the globe, including your favorite teams and players.</p>
            </li>
          </ul>
        </div>
        <p className='text-lg'>Our mission is simple: to bring the excitement of soccer closer to you. Whether you're cheering from the stands or following along from home, Offside ensures you're always in the game.</p>
        <p className='text-lg'>Join our growing community of soccer enthusiasts and make Offside your go-to hub for everything soccer. Together, let’s celebrate the sport that unites us all.</p>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutUs