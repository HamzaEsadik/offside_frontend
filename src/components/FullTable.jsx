import React from 'react'
import useFetch from '../hooks/useFetch'

function FullTable({ id }) {
  const { data, isLoading, error } = useFetch(`/league/${id}/table`);

  if (isLoading) {
    return (
      <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className='animate-pulse bg-cardHeader h-6 w-8'></th>
              <th className='animate-pulse bg-cardHeader h-6 w-16'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className='h-12'>
                <td><div className='animate-pulse bg-cardHeader h-4 w-6'></div></td>
                <td><div className='animate-pulse bg-cardHeader h-4 w-20'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-card rounded-lg flex flex-col gap-2 p-4'>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className='animate-pulse bg-cardHeader h-6 w-8'></th>
              <th className='animate-pulse bg-cardHeader h-6 w-16'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
              <th className='text-center animate-pulse bg-cardHeader h-6 w-12'></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className='h-12'>
                <td><div className='animate-pulse bg-cardHeader h-4 w-6'></div></td>
                <td><div className='animate-pulse bg-cardHeader h-4 w-20'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
                <td className='text-center'><div className='animate-pulse bg-cardHeader h-4 w-8 mx-auto'></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
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
            <th className='text-center'>GD</th>
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
            <td className='text-center'>{team.goals}</td>
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

export default FullTable