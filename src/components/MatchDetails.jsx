import React from 'react'
import useFetch from '../hooks/useFetch'

function MatchDetails() {
  const { data, isLoading, error } = useFetch('/matchdetails/4506907');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p className='text-red-600'>{data.matchId}</p>
      <p>{data.round}</p>
      <p>{data.stadium}</p>
      <p>{data.date}</p>
      <p>{data.referee}</p>
    </div>
  )
}

export default MatchDetails