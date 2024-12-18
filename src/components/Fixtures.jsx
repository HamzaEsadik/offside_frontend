import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiChevronLeft, BiChevronRight, BiChevronDown } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, subDays, isToday, isTomorrow, isYesterday, parse } from 'date-fns';
import useFetch from '../hooks/useFetch';
import { BiCard } from "react-icons/bi";
import { leagueNamesContext } from './Leagues';

function Fixtures() {
  const navigate = useNavigate();

  // Initialize state with today's date in yyyyMMdd format
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyyMMdd'));
 
  // Fetch the data 
  const { data, isLoading, error } = useFetch(`/topLeaguesFixtures/${selectedDate}`);
  
  // Convert date to yyyyMMdd format
  const handleDateChange = (date) => {
    setSelectedDate(format(date, 'yyyyMMdd'));
  };

  // Handle date navigation prev
  const handlePrevDay = () => {
    const prevDay = subDays(currentDate, 1);
    setSelectedDate(format(prevDay, 'yyyyMMdd'));
  };

  // Handle date navigation prev next
  const handleNextDay = () => {
    const nextDay = addDays(currentDate, 1);
    setSelectedDate(format(nextDay, 'yyyyMMdd'));
  };

  // Convert yyyyMMdd string back to Date
  const currentDate = parse(selectedDate, 'yyyyMMdd', new Date());

  // Custom date formatting
  const formatDateDisplay = (dateString) => {
    const date = parse(dateString, 'yyyyMMdd', new Date());
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    if (isYesterday(date)) return 'Yesterday';
    return format(date, 'EEEE, MMMM d');
  };

  // Custom header for date picker
  const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => (
    <div className="flex justify-between items-center p-2">
      <button onClick={decreaseMonth} className="text-drawZ">Prev</button>
      <span className="text-center">{format(date, 'MMMM yyyy')}</span>
      <button onClick={increaseMonth} className="text-drawZ">Next</button>
    </div>
  );

  // parse time from the fixture
  const parseTime = (timeString) => {
    const [, hours, minutes] = timeString.match(/\s(\d{2}):(\d{2})$/);
    return `${hours}:${minutes}`;
  };

  // Handle fixture click
  const handleclick = (id) => {
    navigate(`/match/${id}`);
  };

  // Handle league click
  const handleLeagueclick = (id) => {
    navigate(`/league/${id}`);
  };

  if (isLoading) {
    return (
      <>
        <div className='w-full h-16 bg-card rounded-lg px-4 py-4 gap-2 flex justify-between items-center relative'>
          <BiChevronLeft className='text-s text-drawZ cursor-pointer text-cardHeader animate-pulse'/>
          <div className='h-4 w-44 bg-cardHeader rounded-sm animate-pulse'></div>
          <BiChevronRight className='text-s text-drawZ cursor-pointer text-cardHeader animate-pulse'/>
        </div>
        
        {[1, 2, 3].map((league) => (
          <div key={league} className='w-full bg-card rounded-lg flex flex-col overflow-hidden'>
            <div className='px-4 h-14 bg-cardHeader flex gap-3 items-center'>
              <div className='h-5 w-1/2 bg-card rounded'></div>
            </div>
            
            {[1, 2, 3].map((fixture) => (
              <div key={fixture} className='flex flex-col p-4 hover:bg-hover'>
                <div className='flex justify-between items-center h-8'>
                  <BiCard className='text-cardHeader text-s animate-pulse'/>
                  
                  <div className='flex justify-center items-center w-2/3 gap-4'>
                    <div className='flex h-4 bg-cardHeader rounded w-2/5 justify-end animate-pulse'></div>
                    <div className='flex h-4 bg-cardHeader rounded w-1/5 animate-pulse'></div>
                    <div className='flex h-4 bg-cardHeader rounded w-2/5 justify-start animate-pulse'></div>
                  </div>
                  
                  <div className='bg-cardHeader px-2 rounded-full animate-pulse'>
                    <div className='h-4 w-8 text-cardHeader rounded'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className='w-full h-16 bg-card rounded-lg px-4 py-4 gap-2 flex justify-between items-center relative'>
          <BiChevronLeft className='text-s text-drawZ cursor-pointer text-cardHeader animate-pulse'/>
          <div className='h-4 w-44 bg-cardHeader rounded-sm animate-pulse'></div>
          <BiChevronRight className='text-s text-drawZ cursor-pointer text-cardHeader animate-pulse'/>
        </div>
        
        {[1, 2, 3].map((league) => (
          <div key={league} className='w-full bg-card rounded-lg flex flex-col overflow-hidden'>
            <div className='px-4 h-14 bg-cardHeader flex gap-3 items-center'>
              <div className='h-5 w-1/2 bg-card rounded'></div>
            </div>
            
            {[1, 2, 3].map((fixture) => (
              <div key={fixture} className='flex flex-col p-4 hover:bg-hover'>
                <div className='flex justify-between items-center h-8'>
                  <BiCard className='text-cardHeader text-s animate-pulse'/>
                  
                  <div className='flex justify-center items-center w-2/3 gap-4'>
                    <div className='flex h-4 bg-cardHeader rounded w-2/5 justify-end animate-pulse'></div>
                    <div className='flex h-4 bg-cardHeader rounded w-1/5 animate-pulse'></div>
                    <div className='flex h-4 bg-cardHeader rounded w-2/5 justify-start animate-pulse'></div>
                  </div>
                  
                  <div className='bg-cardHeader px-2 rounded-full animate-pulse'>
                    <div className='h-4 w-8 text-cardHeader rounded'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
    <div className='w-full h-16 bg-card rounded-lg px-4 py-4 gap-2 flex justify-between items-center relative'>
      <BiChevronLeft 
        className='text-s text-drawZ cursor-pointer' 
        onClick={handlePrevDay}
      />
      
      <div className='flex-grow relative flex justify-center'>
        <DatePicker
          selected={currentDate}
          onChange={handleDateChange}
          popperPlacement="bottom-center"
          popperClassName="custom-popper"
          customInput={
            <div className='flex items-center w-full'>
              <span className='flex-grow text-center'>
                {formatDateDisplay(selectedDate)}
              </span>
              <BiChevronDown className='ml-2' />
            </div>
          }
          renderCustomHeader={CustomHeader}
          className='w-full text-center text-s bg-transparent focus:outline-none'
        />
      </div>
      
      <BiChevronRight 
        className='text-s text-drawZ cursor-pointer' 
        onClick={handleNextDay}
      />
    </div>
    <ul className='flex flex-col gap-4'>
    {data
      .filter(league => league.data && league.data.length > 0)
      .map((league) => (
        <li key={league.leagueid}>
          <div className='w-full bg-card rounded-lg flex flex-col overflow-hidden'>
            <div className='px-4 h-14 bg-cardHeader flex gap-3 items-center'>
              <h4 onClick={() => handleLeagueclick(league.leagueid)} className='hover:cursor-pointer'>{leagueNamesContext.names[league.leagueid] || league.leagueid}</h4>
            </div>
            <ul>
              {league.data.map((fixture) => (
                <li key={fixture.id}>
                  <div className='flex flex-col p-4 hover:bg-hover hover:cursor-pointer' onClick={() => handleclick(fixture.id)}>
                    <div className='flex justify-between items-center h-8'>
                      <BiCard title={fixture.time} className='text-draw text-s'/>
                      <div className='flex justify-center items-center w-full gap-4'>
                        <div className='flex w-1/3 justify-end gap-3 items-center'>
                          <p dir="rtl" className='text-xs font-semibold line-clamp-1 overflow-hidden'>{fixture.home.name}</p>
                        </div>
                        <div className='flex justify-center'>
                          {fixture.started ? (
                            <p className='font-semibold text-s'>{fixture.home.score} - {fixture.away.score}</p>
                          ) : (
                            <p className='font-semibold text-s text-draw'>{parseTime(fixture.time)}</p>
                          )}
                        </div>
                        <div className='flex w-1/3 justify-start gap-3 items-center'>
                          <p className='text-xs font-semibold line-clamp-1 overflow-hidden'>{fixture.away.name}</p>
                        </div>
                      </div>
                      <div className={`px-2 rounded-full ${fixture.finished ? 'bg-cardHeader' : fixture.started ? 'bg-win text-backgroud' : 'bg-cardHeader'}`}>
                        {fixture.finished ? (
                          <p className='text-xss'>FT</p>
                        ) : fixture.started ? (
                          <p className='text-xss'>LIVE</p>
                        ) : (
                          <p className='text-xss'></p>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>

    </>
  )
}

export default Fixtures