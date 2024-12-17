import React from 'react'
import { lazy } from 'react'

const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));
const Leagues = lazy(() => import('../components/Leagues'));
const News = lazy(() => import('../components/GlobalNews'));
const Fixtures = lazy(() => import('../components/Fixtures'));


function Home() {
  return (
    <div>
      <Header/>
      <section className='px-4 py-12'>
        <div className='flex gap-4'>
          <div className='w-72 shrink-0 hidden lg:block'>
            <Leagues/>
          </div>
          <div className='flex-grow flex flex-col gap-4 col-span-2'>
            <Fixtures/>
            <div className='block sm:hidden'>
            <News/>
            </div>
          </div>
          <div className='w-60 lg:w-72 shrink-0 hidden sm:flex flex-col gap-4'>
            <News/>
            <div className='block lg:hidden'>
              <Leagues/>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home