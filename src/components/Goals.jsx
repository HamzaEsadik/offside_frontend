import React from 'react'
import useFetch from '../hooks/useFetch'


function Goals() {
  const { data, isLoading, error } = useFetch('/league/87/goals');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {data.map((player) => (
        <li key={player.id}>
          <h3 className='text-red-600'>{player.name}</h3>
          <h3>{player.teamId}</h3>
          <h3>{player.teamName}</h3>
          <h3>{player.goals}</h3>
        </li>
      ))}
    </ul>
  )
}

export default Goals