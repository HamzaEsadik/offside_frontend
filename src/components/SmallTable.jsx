import React from 'react'
import useFetch from '../hooks/useFetch'

function SmallTable() {
  const { data, isLoading, error } = useFetch('/league/87/table');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <ul>
      {data.map((team) => (
        <li key={team.id}>
          <h3 className='text-red-600'>{team.team_name}</h3>
          <h3>{team.rank}</h3>
          <h3>{team.matches}</h3>
          <h3>{team.points}</h3>
        </li>
      ))}
    </ul>
  )
}

export default SmallTable