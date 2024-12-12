import React from 'react'
import { lazy } from 'react'

const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

const Leagues = lazy(() => import('../components/Leagues'));
const News = lazy(() => import('../components/GlobalNews'));
// const Calander = lazy(() => import('../components/Calander'));
// const Assists = lazy(() => import('../components/Assists'));
// const Goals = lazy(() => import('../components/Goals'));
// const Rating = lazy(() => import('../components/Rating'));
// const FullTable = lazy(() => import('../components/FullTable'));
// const MediumTable = lazy(() => import('../components/MediumTable'));
// const SmallTable = lazy(() => import('../components/SmallTable'));
// const LeagueNews = lazy(() => import('../components/LeagueNews'));
const Fixtures = lazy(() => import('../components/Fixtures'));
// const LeagueFixtures = lazy(() => import('../components/LeagueFixtures'));
// const NextFixtures = lazy(() => import('../components/NextFixtures'));
// const MatchDetails = lazy(() => import('../components/MatchDetails'));
// const MatchTeams = lazy(() => import('../components/MatchTeams'));
// const MatchLineups = lazy(() => import('../components/MatchLineups'));


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
      {/* <Leagues/> */}
      {/* <News/> */}
      {/* <Assists/> */}
      {/* <Goals/> */}
      {/* <Rating/> */}
      {/* <FullTable/> */}
      {/* <MediumTable/> */}
      {/* <SmallTable/> */}
      {/* <LeagueNews/> */}
      {/* <Fixtures/> */}
      {/* <LeagueFixtures/> */}
      {/* <NextFixtures/> */}
      {/* <MatchDetails/> */}
      {/* <MatchTeams/> */}
      {/* <MatchLineups/> */}
    </div>
  )
}

export default Home