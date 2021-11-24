import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './App.css'
import styled from 'styled-components'
import List from './components/List' 
import Table from './components/Table';

const Form = styled.form`
width: 35%;
margin: auto;
display: flex;
flex-direction: column;
`;

const Button = styled.button`
border-radius:3px;
margin-top:15px;
margin-bottom:15px;
width:100%;
padding:5px;
font-size:16px;
background:linear-gradient(to right, #25c481, #25b7c4);
`;
const Heading = styled.h1`
    text-align:center;
`;



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
      <Heading>NYS Medical Facility Directory</Heading>
      <Form onSubmit={(e) => {
        setUrl(`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`)
        e.preventDefault()       
    }}>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <Button type="button" onClick={() => setUrl(`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`)}>
            Search
            </Button>
      </Form>
      {isError && <div>Something went wrong ...</div>}
        { 
            isLoading ? (
            <div> isLoading ...</div>
            ) : (
        <div>
            
            <Table data ={data}/>
        </div>  
        )}
      </Fragment>
    
  );
}

export default App;