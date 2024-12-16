import React from 'react'
import useFetch from '../hooks/useFetch'

function MediumTable({ id }) {
  const { data, isLoading, error } = useFetch(`/league/${id}/table`);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
    <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
    <table className="table-auto">
        <thead>
          <tr className=''>
            <th>#</th>
            <th>Team</th>
            <th className='text-center'>Points</th>
            <th className='text-center'>Played</th>
            <th className='text-center'>win</th>
            <th className='text-center'>draw</th>
            <th className='text-center'>lose</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team) => (
            <tr key={team.rank} className='divide-y divide-cardHeader'>
            <td>{team.rank}</td>
            <td>{team.team_name}</td>
            <td className='text-center'>{team.points}</td>
            <td className='text-center'>{team.matches}</td>
            <td className='text-center'>{team.win}</td>
            <td className='text-center'>{team.draw}</td>
            <td className='text-center'>{team.lose}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MediumTable