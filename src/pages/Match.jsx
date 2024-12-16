import React from 'react';
import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

const MatchTeams = lazy(() => import('../components/MatchTeams'));
const MatchDetails = lazy(() => import('../components/MatchDetails'));
const MatchLineups = lazy(() => import('../components/MatchLineups'));
const SmallTable = lazy(() => import('../components/SmallTable'));


function Match() {
  const { matchId } = useParams();
  const { data, isLoading, error } = useFetch(`/match/${matchId}`);

  if (isLoading) {
    return <Header/>;
  }

  if (error) {
    return <Header/>;;
  }
  
  return (
    <div>
      <Header/>
      <section className='px-4 py-12'>
      <div className='flex gap-4'>
        <div className='flex-grow flex flex-col gap-4 col-span-2'>
          <MatchTeams id={matchId} />
          <div className='block sm:hidden'><MatchDetails id={matchId}/></div>
          <MatchLineups id={matchId}/>
          <div className='block sm:hidden'><SmallTable id={data.leagueId}/></div>
        </div>
        <div className='w-60 lg:w-72 shrink-0 hidden sm:flex flex-col gap-4'>
          <MatchDetails id={matchId}/>
          <SmallTable id={data.leagueId}/>
        </div>
      </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Match