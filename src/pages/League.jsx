import React, { useState } from 'react'
import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

const Assists = lazy(() => import('../components/Assists'));
const Rating = lazy(() => import('../components/Rating'));
const Goals = lazy(() => import('../components/Goals'));
const LeagueNews = lazy(() => import('../components/GlobalNews'));
const MediumTable = lazy(() => import('../components/MediumTable'));
const NextFixtures = lazy(() => import('../components/NextFixtures'));

function League() {
  const { leagueId } = useParams();
  const { data, isLoading, error } = useFetch(`/league/${leagueId}`);
  const [activeTab, setActiveTab] = useState('Overview');

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  // Array of tab names to make rendering more DRY
  const tabs = ['Overview', 'Fixtures', 'Table', 'Statistics'];

  return (
    <div>
      <Header/>
      <section className='px-4 py-12'>
        <div className='flex gap-4'>
          <div className='hidden md:block w-72 shrink-0'>
            <LeagueNews/>
          </div>
          <div className='flex-grow flex flex-col gap-4 overflow-hidden'>
            <div className='w-full h-14 md:h-20 rounded-lg bg-card flex items-center px-8'>
              <h4 className='text-md md:text-xl'>{data.name}</h4>
            </div>
            <div className='w-full sm:w-2/3 h-12 rounded-lg bg-card flex overflow-hidden p-2 gap-2'>
              {tabs.map((tab) => (
                <div 
                  key={tab}
                  className={`flex-1 h-full hover:bg-backgroud hover:cursor-pointer rounded-md flex justify-center items-center 
                    ${activeTab === tab ? 'bg-backgroud' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <p className='text-xs md:text-s'>{tab}</p>
                </div>
              ))}
            </div>
            {activeTab === 'Overview' && (
              <div className='flex flex-col w-full gap-4 overflow-hidden'>
                <div className='w-full'>
                  <NextFixtures id={leagueId}/>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                  <div className='flex-1 flex flex-col gap-4'>
                    <Rating id={leagueId}/>
                    <Goals id={leagueId}/>
                    <Assists id={leagueId}/>
                  </div>
                  <div className='flex-1 flex flex-col gap-4'>
                    <MediumTable id={leagueId}/>
                    <div className='md:hidden'>
                      <LeagueNews id={leagueId}/>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'Fixtures' && (
              <div className='bg-card p-4 rounded-lg'>
                Fixtures Content
              </div>
            )}
            {activeTab === 'Table' && (
              <div className='bg-card p-4 rounded-lg'>
                Table Content
              </div>
            )}
            {activeTab === 'Statistics' && (
              <div className='bg-card p-4 rounded-lg'>
                Statistics Content
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default League