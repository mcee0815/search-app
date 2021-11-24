import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import List from './components/List' 

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
//   const [search, setSearch] = useState('');
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    `https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (query) => {
        let result = await axios(url);
            setData(result.data);
            setIsLoading(false);
            setIsError(false);
        try {
            const result = await axios(url);
            
            setData(result.data);
            } catch (error) {
            setIsError(true);
            }
        };
    
    setIsLoading(true);
    fetchData(query);
  }, [url,query]);

  return (
    
      <Fragment>
      <h2>Medical Facility Phone Directory</h2>
      <form onSubmit={(e) => {
        setUrl(`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`)
        e.preventDefault()       
    }}>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button type="button" onClick={() => setUrl(`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`)}>
            Search
            </button>
      </form>
      {isError && <div>Something went wrong ...</div>}
        { 
            isLoading ? (
            <div> isLoading ...</div>
            ) : (
        <div>
            <List data={data}/>
        </div>  
        )}
      </Fragment>
    
  );
}

export default App;