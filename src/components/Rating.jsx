import React from 'react'
import useFetch from '../hooks/useFetch'
import { BiUser } from "react-icons/bi";


function Rating({ id }) {
  const { data, isLoading, error } = useFetch(`/league/${id}/rating`);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <ul>
    //   {data.map((player) => (
    //     <li key={player.id}>
    //       <h3 className='text-red-600'>{player.name}</h3>
    //       <h3>{player.teamId}</h3>
    //       <h3>{player.teamName}</h3>
    //       <h3>{player.rating}</h3>
    //     </li>
    //   ))}
    // </ul>
    <>
      <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
        <div>
          <h4>Rating</h4>
        </div>
        <ul className='divide-y divide-cardHeader'>
        {data.map((player) => (
          <li key={player.id} className='flex h-14 items-center justify-between'>
            <div className='flex gap-3'>
              <BiUser className='text-xl md:text-3xl'/>
              <p className='text-s md:text-md'>{player.name}</p>
            </div>
            <div className='bg-cardHeader px-3 md:py-1 rounded-full'>
              <p className='text-xs'>{player.rating}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Rating