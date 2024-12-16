import React from 'react'
import useFetch from '../hooks/useFetch'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function NextFixtures({ id }) {
  const today = new Date().toISOString().slice(0,10).replace(/-/g, '');
  const { data, isLoading, error } = useFetch(`/league/${id}/nextfixtures/${today}`);

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
      hour12: false,
    }).toUpperCase();
  };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div className='max-w-full overflow-hidden'>
      <Carousel
      opts={{
      align: "start",
      loop: false,
      dragFree: true,
    }} className='bg-card rounded-lg w-full overflow-x-auto'>
        <CarouselContent className='flex p-4'>
          {data.map((fixture) => (
            <CarouselItem key={fixture.id} className="basis-80 flex-shrink-0">
            <div className='bg-menu h-32 w-full rounded-md flex gap-2 items-center justify-evenly'>
              <h4 className='w-2/5 px-4 md:px8 text-s sm:text-sm text-center'>{fixture.home.name}</h4>
              <div className='w-1/5 flex flex-col items-center justify-center'>
                {data.finished ? (
                  <>
                    <h3 className='text-md'>{fixture.home.score} - {fixture.away.score}</h3>
                    <p className='text-draw text-xss md:text-xs font-semibold'>{formatDate(fixture.time)}</p>
                  </>
                ) : (
                  <>
                    <h3 className='text-md'>{formatTime(fixture.time)}</h3>
                    <p className='text-draw text-xss md:text-xs font-semibold'>{formatDate(fixture.time)}</p>
                  </>
                )}
              </div>
            <h4 className='w-2/5 px-4 md:px8 text-s sm:text-sm text-center'>{fixture.away.name}</h4>
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    </>
  )
}

export default NextFixtures