import React from 'react';
import useFetch from '../hooks/useFetch';

function MatchTeams({ id }) {
  const { data, isLoading, error } = useFetch(`/match/${id}`);

  if (isLoading) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-2 overflow-hidden'>
        {/* Header Skeleton */}
        <div className='w-full h-16 bg-cardHeader flex justify-center items-center'>
          <div className='w-1/2 h-6 bg-card rounded animate-pulse'></div>
        </div>
        
        {/* Content Skeleton */}
        <div className='w-full h-32 sm:h-48 flex justify-evenly items-center gap-2 md:gap-4'>
          {/* Home Team Name Skeleton */}
          <div className='w-2/5 px-4 md:px-8 flex justify-center'>
            <div className='w-3/4 h-6 sm:h-8 bg-cardHeader rounded animate-pulse'></div>
          </div>
          
          {/* Score/Time Container Skeleton */}
          <div className='w-1/5 flex flex-col items-center justify-center'>
            <div className='w-1/2 h-8 lg:h-12 bg-cardHeader rounded mb-2 animate-pulse'></div>
            <div className='w-1/2 h-4 bg-cardHeader rounded animate-pulse'></div>
          </div>
          
          {/* Away Team Name Skeleton */}
          <div className='w-2/5 px-4 md:px-8 flex justify-center'>
            <div className='w-3/4 h-6 sm:h-8 bg-cardHeader rounded'></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-2 overflow-hidden'>
        {/* Header Skeleton */}
        <div className='w-full h-16 bg-cardHeader flex justify-center items-center'>
          <div className='w-1/2 h-6 bg-card rounded animate-pulse'></div>
        </div>
        
        {/* Content Skeleton */}
        <div className='w-full h-32 sm:h-48 flex justify-evenly items-center gap-2 md:gap-4'>
          {/* Home Team Name Skeleton */}
          <div className='w-2/5 px-4 md:px-8 flex justify-center'>
            <div className='w-3/4 h-6 sm:h-8 bg-cardHeader rounded animate-pulse'></div>
          </div>
          
          {/* Score/Time Container Skeleton */}
          <div className='w-1/5 flex flex-col items-center justify-center'>
            <div className='w-1/2 h-8 lg:h-12 bg-cardHeader rounded mb-2 animate-pulse'></div>
            <div className='w-1/2 h-4 bg-cardHeader rounded animate-pulse'></div>
          </div>
          
          {/* Away Team Name Skeleton */}
          <div className='w-2/5 px-4 md:px-8 flex justify-center'>
            <div className='w-3/4 h-6 sm:h-8 bg-cardHeader rounded'></div>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options).toUpperCase();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).toUpperCase();
  };

  return (
    <>
      <div className='w-full bg-card rounded-lg flex flex-col gap-2 overflow-hidden'>
        <div className='w-full h-16 bg-cardHeader flex justify-center items-center'>
          <h4>{data.leagueId}</h4>
        </div>
        <div className='w-full h-32 sm:h-48 flex justify-evenly items-center gap-2 md:gap-4'>
          <h4 className='w-2/5 px-4 md:px8 text-md sm:text-lg text-center md:text-2xl'>{data.homeTeam.name}</h4>
          <div className='w-1/5 flex flex-col items-center justify-center'>
            {data.finished ? (
              <>
                <h3 className='text-md lg:text-3xl'>{data.homeTeam.score} - {data.awayTeam.score}</h3>
                <p className='text-draw text-xss md:text-xs font-semibold'>{formatDate(data.date)}</p>
              </>
            ) : (
              <>
                <h3 className='text-md lg:text-3xl'>{formatTime(data.date)}</h3>
                <p className='text-draw text-xss md:text-xs font-semibold'>{formatDate(data.date)}</p>
              </>
            )}
          </div>
          <h4 className='w-2/5 px-4 md:px8 text-md sm:text-lg text-center md:text-2xl'>{data.awayTeam.name}</h4>
        </div>
      </div>
    </>
  );
}

export default MatchTeams;
