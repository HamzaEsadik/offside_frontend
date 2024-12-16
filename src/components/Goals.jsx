import React from 'react'
import useFetch from '../hooks/useFetch'
import { BiUser } from "react-icons/bi";



function Goals({ id }) {
  const { data, isLoading, error } = useFetch(`/league/${id}/goals`);

  if (isLoading) {
    return (
      <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
        <div className='h-6 w-20 bg-cardHeader animate-pulse rounded'></div>
        <ul className='divide-y divide-cardHeader'>
          {[1, 2, 3].map((item) => (
            <li key={item} className='flex h-14 items-center justify-between py-2'>
              <div className='flex gap-3 items-center'>
                <div className='w-8 h-4 md:w-12 md:h-4 bg-cardHeader animate-pulse rounded-full'></div>
                <div className='h-4 w-32 bg-cardHeader animate-pulse rounded'></div>
              </div>
              <div className='w-16 h-4 bg-cardHeader animate-pulse rounded-full'></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
        <div className='h-6 w-20 bg-cardHeader animate-pulse rounded'></div>
        <ul className='divide-y divide-cardHeader'>
          {[1, 2, 3].map((item) => (
            <li key={item} className='flex h-14 items-center justify-between py-2'>
              <div className='flex gap-3 items-center'>
                <div className='w-8 h-4 md:w-12 md:h-4 bg-cardHeader animate-pulse rounded-full'></div>
                <div className='h-4 w-32 bg-cardHeader animate-pulse rounded'></div>
              </div>
              <div className='w-16 h-4 bg-cardHeader animate-pulse rounded-full'></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    // <ul>
    //   {data.map((player) => (
    //     <li key={player.id}>
    //       <h3 className='text-red-600'>{player.name}</h3>
    //       <h3>{player.teamId}</h3>
    //       <h3>{player.teamName}</h3>
    //       <h3>{player.goals}</h3>
    //     </li>
    //   ))}
    // </ul>
    <>
      <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
        <div>
          <h4>Goals</h4>
        </div>
        <ul className='divide-y divide-cardHeader'>
        {data.map((player) => (
          <li key={player.id} className='flex h-14 items-center justify-between'>
            <div className='flex gap-3'>
              <BiUser className='text-xl md:text-3xl'/>
              <p className='text-s md:text-md'>{player.name}</p>
            </div>
            <div className='bg-cardHeader px-3 md:py-1 rounded-full'>
              <p className='text-xs'>{player.goals}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Goals