import React from 'react'
import useFetch from '../hooks/useFetch'

function MatchTeams() {
  const { data, isLoading, error } = useFetch('/match/4506437');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p className='text-red-600'>{data.matchId}</p>
      <p>{data.leagueId}</p>
      <p>{data.matchId}</p>
      <p>{data.date}</p>
      <p>{data.started}</p>
      <p>{data.finished}</p>
      <p>{data.homeTeam.id} / {data.homeTeam.name} / {data.homeTeam.score}</p>
      <p>{data.awayTeam.id} / {data.awayTeam.name} / {data.awayTeam.score}</p>
    </div>
  )
}

export default MatchTeams