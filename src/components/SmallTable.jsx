import React from 'react'
import useFetch from '../hooks/useFetch'

function SmallTable({ id }) {
  const { data, isLoading, error } = useFetch(`/league/${id}/table`);

  if (isLoading) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className='w-[40%]'><div className='w-1/2 h-3 bg-cardHeader rounded animate-pulse'></div></th>
              <th className='w-[25%]'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></th>
              <th className='w-[25%]'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(16)].map((_, index) => (
              <tr key={`table-skeleton-${index}`} className='divide-y divide-cardHeader'>
                <td className='text-start'><div className='w-3/4 h-3 bg-cardHeader rounded animate-pulse'></div></td>
                <td className='text-center'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></td>
                <td className='text-center'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className='w-[40%]'><div className='w-1/2 h-3 bg-cardHeader rounded animate-pulse'></div></th>
              <th className='w-[25%]'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></th>
              <th className='w-[25%]'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(16)].map((_, index) => (
              <tr key={`table-skeleton-${index}`} className='divide-y divide-cardHeader'>
                <td className='text-start'><div className='w-3/4 h-3 bg-cardHeader rounded animate-pulse'></div></td>
                <td className='text-center'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></td>
                <td className='text-center'><div className='w-1/2 h-3 bg-cardHeader rounded mx-auto animate-pulse'></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  return (
    <>
    <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
      <table className="table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Points</th>
            <th>Played</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team) => (
            <tr key={team.rank} className='divide-y divide-cardHeader'>
              <td>{team.rank}</td>
            <td>{team.team_name}</td>
            <td className='text-center'>{team.points}</td>
            <td className='text-center'>{team.matches}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default SmallTable