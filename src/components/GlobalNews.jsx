import React from 'react'
import useFetch from '../hooks/useFetch'

function GlobalNews() {
  const { data, isLoading, error } = useFetch('/news/87');

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (isLoading) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col py-4 gap-2'>
        <div className='px-4'>
          <div className='h-4 bg-cardHeader rounded-sm w-1/3 mb-2 animate-pulse'></div>
        </div>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className='flex px-4 py-2 gap-3'>
            <div className='w-16 h-16 bg-cardHeader rounded-sm shrink-0 animate-pulse'></div>
            <div className='flex flex-col justify-between flex-grow'>
              <div className='h-3 bg-cardHeader rounded-sm w-full mb-1 animate-pulse'></div>
              <div className='h-3 bg-cardHeader rounded-sm w-2/3 animate-pulse'></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col py-4 gap-2'>
        <div className='px-4'>
          <div className='h-4 bg-cardHeader rounded-sm w-1/3 mb-2 animate-pulse'></div>
        </div>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className='flex px-4 py-2 gap-3'>
            <div className='w-16 h-16 bg-cardHeader rounded-sm shrink-0 animate-pulse'></div>
            <div className='flex flex-col justify-between flex-grow'>
              <div className='h-3 bg-cardHeader rounded-sm w-full mb-1 animate-pulse'></div>
              <div className='h-3 bg-cardHeader rounded-sm w-2/3 animate-pulse'></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    // <ul>
    //     {data.map((news) => (
    //       <li key={news.title}>
    //         <h3 className='font-blod text-red-600'>{news.title}</h3>
    //         <h5 className='font-blod'>{news.imageUrl}</h5>
    //         <h5 className='font-blod'>{news.time}</h5>
    //         <h5 className='font-blod'>{news.src}</h5>
    //         <h5 className='font-blod'>{news.url}</h5>
    //       </li>
    //     ))};
    // </ul>
    <>
      <div className='w-full bg-card rounded-lg flex flex-col py-4 gap-2'>
        <div className='px-4'>
          <h4>news</h4>
        </div>
        {data.map((news) => (
          <div key={news.title} className='flex hover:cursor-pointer hover:bg-hover px-4 py-2 gap-3' onClick={() => handleClick(news.url)}>
            <div className='w-16 h-16 shrink-0'>
              <img src={news.imageUrl} alt="Image" className='w-full h-full object-cover rounded-sm'/>
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-xs line-clamp-2' title={news.title}>{news.title}</p>
              <p className='text-xss line-clamp-1 text-draw' title={news.time}>{news.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default GlobalNews