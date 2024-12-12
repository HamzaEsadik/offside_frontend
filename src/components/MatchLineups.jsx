import React from 'react'
import useFetch from '../hooks/useFetch'

function MatchLineups() {
  const { data, isLoading, error } = useFetch('/lineups/4506907');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p className='text-red-600'>Home Team</p>
      <ul>
        {data.hometeam.map((player) => (
          <li>
            <p className='text-green-600'>{player.name}</p>
            <p>{player.id}</p>
            <p>{player.countryName}</p>
          </li>
        ))}
      </ul>
      <ul>
        {data.awayteam.map((player) => (
          <li>
            <p className='text-blue-600'>{player.name}</p>
            <p>{player.id}</p>
            <p>{player.countryName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MatchLineups