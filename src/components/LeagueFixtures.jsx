import React from 'react'
import useFetch from '../hooks/useFetch'


function LeagueFixtures() {
  const { data, isLoading, error } = useFetch('/league/87/fixtures/20241205');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((fixture) => (
          <li key={fixture.id}>
            <p className='text-red-600'>{fixture.id}</p>
            <p>{fixture.time}</p>
            <p>{fixture.home.id} / {fixture.home.name} / {fixture.home.score}</p>
            <p>{fixture.away.id} / {fixture.away.name} / {fixture.away.score}</p>
            <p>{fixture.started}</p>
            <p>{fixture.finished}</p>
            <p>{fixture.cancelled}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeagueFixtures