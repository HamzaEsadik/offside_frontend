import React from 'react'
import useFetch from '../hooks/useFetch'

function LeagueNews() {
  const { data, isLoading, error } = useFetch('/news/87');

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
     <ul>
        {data.map((news) => (
          <li key={news.title}>
            <h3 className='font-blod text-red-600'>{news.title}</h3>
            <h5 className='font-blod'>{news.imageUrl}</h5>
            <h5 className='font-blod'>{news.time}</h5>
            <h5 className='font-blod'>{news.src}</h5>
            <h5 className='font-blod'>{news.url}</h5>
          </li>
        ))};
    </ul>
    </div>
  )
}

export default LeagueNews