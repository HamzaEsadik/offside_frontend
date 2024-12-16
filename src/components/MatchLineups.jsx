import React from 'react'
import useFetch from '../hooks/useFetch'
import { BiUser } from "react-icons/bi";

function MatchLineups({ id }) {
  const { data, isLoading, error } = useFetch(`/lineups/${id}`);

  if (isLoading) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <div className='w-1/4 h-4 bg-cardHeader rounded animate-pulse'></div>
        <div className='flex'>
          <div className='flex-1 flex justify-center'>
            <ul className='flex flex-col gap-3'>
              {[...Array(11)].map((_, index) => (
                <li key={`home-skeleton-${index}`} className='flex gap-2 items-center'>
                  <div className='w-32 h-4 bg-cardHeader rounded-full animate-pulse'></div>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1 flex justify-center'>
            <ul className='flex flex-col gap-3'>
              {[...Array(11)].map((_, index) => (
                <li key={`away-skeleton-${index}`} className='flex gap-2 items-center'>
                  <div className='w-32 h-4 bg-cardHeader rounded-full animate-pulse'></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <div className='w-1/4 h-4 bg-cardHeader rounded animate-pulse'></div>
        <div className='flex'>
          <div className='flex-1 flex justify-center'>
            <ul className='flex flex-col gap-3'>
              {[...Array(11)].map((_, index) => (
                <li key={`home-skeleton-${index}`} className='flex gap-2 items-center'>
                  <div className='w-32 h-4 bg-cardHeader rounded-full animate-pulse'></div>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1 flex justify-center'>
            <ul className='flex flex-col gap-3'>
              {[...Array(11)].map((_, index) => (
                <li key={`away-skeleton-${index}`} className='flex gap-2 items-center'>
                  <div className='w-32 h-4 bg-cardHeader rounded-full animate-pulse'></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <h4>Lineups</h4>
        <div className='flex'>
        <div className='flex-1 flex justify-center'>
          <ul className='flex flex-col gap-3'>
            {data.hometeam.map((player) => (
              <li key={player.name} className='flex gap-2 items-center'>
              <BiUser/>
              <p className='text-xs sm:text-base'>{player.name}</p>
            </li>
            ))}
          </ul>
        </div>
        <div className='flex-1 flex justify-center'>
        <ul className='flex flex-col gap-3'>
            {data.awayteam.map((player) => (
              <li key={player.name} className='flex gap-2 items-center'>
              <BiUser/>
              <p className='text-xs sm:text-base'>{player.name}</p>
            </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default MatchLineups