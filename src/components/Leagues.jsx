import React, {useState, useMemo, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import { BiCaretDown, BiCaretUp, BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


export const leagueNamesContext = {
  names: {}
};

function Leagues() {
  const navigate = useNavigate();

  // Fetch the data
  const { data, isLoading, error } = useFetch('/leagues');
  const [expandedCountries, setExpandedCountries] = useState([]);
  const [search, setSearch] = useState('');

  // Handle live search
  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  // Handle fixture click
  const handleLeagueclick = (id) => {
    navigate(`/league/${id}`);
  };

  // Memoized filtered data to optimize performance
  const filteredData = useMemo(() => {
    if (!data || !data.response || !data.response.leagues) return [];

    return data.response.leagues.reduce((acc, country) => {
      // Filter leagues within the country
      const filteredLeagues = country.leagues?.filter(league => 
        league.name.toLowerCase().includes(search)
      );

      // Check if country name matches search or has matching leagues
      const isCountryMatch = country.name.toLowerCase().includes(search);
      const hasMatchingLeagues = filteredLeagues && filteredLeagues.length > 0;

      if (isCountryMatch || hasMatchingLeagues) {
        acc.push({
          ...country,
          leagues: filteredLeagues || []
        });
      }

      return acc;
    }, []);
  }, [data, search]);

  // Get leagues names
  useEffect(() => {
    if (data && data.response && data.response.leagues) {
      const namesMap = {};
      data.response.leagues.forEach(country => {
        country.leagues?.forEach(league => {
          namesMap[league.id] = league.name;
        });
      });
      leagueNamesContext.names = namesMap;
    }
  }, [data]);

  // Automatically expand countries with search results
  useEffect(() => {
    if (search) {
      const matchedCountries = filteredData.map(country => country.name);
      setExpandedCountries(matchedCountries);
    } else {
      setExpandedCountries([]);
    }
  }, [search, filteredData]);

  // Handle toggle countries
  const toggleCountry = (countryName) => {
    setExpandedCountries(prev => 
      prev.includes(countryName)
        ? prev.filter(name => name !== countryName)
        : [...prev, countryName]
    );
  };

  if (isLoading) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col py-4 gap-4'>
        <div className='px-4'>
          <div className='h-4 bg-cardHeader rounded-sm w-1/3 mb-4 animate-pulse'></div>
        </div>
        
        <div className="px-4 relative"> 
          <div className='h-8 bg-cardHeader rounded w-full animate-pulse'></div>
        </div>
        
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className='flex flex-col border-b border-cardHeader last:border-none animate-pulse'>
              <div className='flex px-4 py-2 justify-between items-center'>
                <div className='h-4 bg-cardHeader rounded w-1/2 animate-pulse'></div>
                <div className='h-4 w-4 bg-cardHeader rounded animate-pulse'></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full bg-card rounded-lg flex flex-col py-4 gap-4'>
        <div className='px-4'>
          <div className='h-4 bg-cardHeader rounded-sm w-1/3 mb-4 animate-pulse'></div>
        </div>
        
        <div className="px-4 relative"> 
          <div className='h-8 bg-cardHeader rounded w-full animate-pulse'></div>
        </div>
        
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className='flex flex-col border-b border-cardHeader last:border-none animate-pulse'>
              <div className='flex px-4 py-2 justify-between items-center'>
                <div className='h-4 bg-cardHeader rounded w-1/2 animate-pulse'></div>
                <div className='h-4 w-4 bg-cardHeader rounded animate-pulse'></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className='w-full bg-card rounded-lg flex flex-col py-4 gap-4'>
        <div className='px-4'>
          <h4>Leagues</h4>
        </div>
        <div className="px-4 relative">
          <BiSearch className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search countries or leagues"
            value={search} 
            onChange={handleSearch} 
            className="w-full h-8 rounded-sm bg-cardHeader text-xs pl-8 pr-4 focus:outline-none"
          />
        </div>
        <ul>
        {filteredData.map((country) => (
          <li className='flex flex-col' key={country.name}>
            <div 
              className='flex hover:cursor-pointer hover:bg-hover px-4 py-2 justify-between' 
              onClick={() => toggleCountry(country.name)}
            >
              <p className='text-xs font-semibold'>{country.name}</p>
              {expandedCountries.includes(country.name) 
                ? <BiCaretUp className='text-text text-s'/> 
                : <BiCaretDown className='text-text text-s'/>
              }
            </div>
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                expandedCountries.includes(country.name) ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              {country.leagues.length > 0 ? (
                <ul>
                  {country.leagues.map((league) => (
                    <li
                      key={league.id}
                      className="flex hover:cursor-pointer hover:bg-hover px-4 py-2 justify-between"
                      onClick={() => handleLeagueclick(league.id)}
                    >
                      <div className="flex gap-3">
                        <div className='w-4'>
                          
                        </div>
                        <p className="text-xs">{league.name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs px-4 py-2 text-gray-500">No matching leagues</p>
              )}
            </div>
          </li>
        ))}
        {filteredData.length === 0 && (
          <li className="text-center text-gray-500 py-4">No matches found</li>
        )}
        </ul>
      </div>
    </>
  )
}

export default Leagues