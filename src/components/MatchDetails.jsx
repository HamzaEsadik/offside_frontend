import React from 'react'
import useFetch from '../hooks/useFetch'
import { BiCalendarCheck, BiGitCompare, BiMap, BiUser } from "react-icons/bi";


function MatchDetails({ id }) {
  // Fetch the data
  const { data, isLoading, error } = useFetch(`/matchdetails/${id}`);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options).toUpperCase();
  };

  // Format Time to HH:MM
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).toUpperCase();
  };

  if (isLoading) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <div className='w-2/4 h-4 bg-cardHeader rounded animate-pulse'></div>
        <div className='flex flex-col gap-2 justify-center'>
          {[...Array(4)].map((_, index) => (
            <div key={`detail-skeleton-${index}`} className='flex gap-3 text-lg text-text items-center'>
              <div className='w-5 h-5 bg-cardHeader rounded-full animate-pulse'></div>
              <div className='w-3/4 h-4 bg-cardHeader rounded animate-pulse'></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
        <div className='w-2/4 h-4 bg-cardHeader rounded animate-pulse'></div>
        <div className='flex flex-col gap-2 justify-center'>
          {[...Array(4)].map((_, index) => (
            <div key={`detail-skeleton-${index}`} className='flex gap-3 text-lg text-text items-center'>
              <div className='w-5 h-5 bg-cardHeader rounded-full animate-pulse'></div>
              <div className='w-3/4 h-4 bg-cardHeader rounded animate-pulse'></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
    <div className='w-full bg-card rounded-lg flex flex-col gap-4 p-6 overflow-hidden'>
      <h4>Match details</h4>
      <div className='flex flex-col gap-2 justify-center'>
        <div className='flex gap-3 text-lg text-text items-center'>
          <BiCalendarCheck className=''/>
          <p className='text-s'>{formatDate(data.date)}, {formatTime(data.date)}</p>
        </div>
        <div className='flex gap-3 text-lg text-text items-center'>
          <BiGitCompare/>
          <p className='text-s'>{data.round}</p>
        </div>
        <div className='flex gap-3 text-lg text-text items-center'>
          <BiMap/>
          <p className='text-s'>{data.stadium}</p>
        </div>
        <div className='flex gap-3 text-lg text-text items-center'>
          <BiUser/>
          <p className='text-s'>{data.referee}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default MatchDetails