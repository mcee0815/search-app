import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './App.css'
import styled from 'styled-components'
import { Ring } from 'react-awesome-spinners'
// import List from './components/List' 
import Table from './components/Table';

const Form = styled.form`
width: 50%;
margin: auto;
display: flex;
flex-direction: column;
`;

const Button = styled.button`
border-radius:20px;
margin-top:15px;
margin-bottom:45px;
width:100%;
padding:5px;
font-size:16px;
font-weight:200;
border:1px solid white;
color:green;
box-shadow: 0 8px 8px -4px grey;
`;
const Heading = styled.h1`
    margin-top:45px;
    margin-bottom:45px;
    text-align:center;
    color:white;
`;
const Wrapper = styled.div`
width:100%;
margin:0 auto;
box-sizing:border-box;
padding:20px;
`;
const NoData = styled.div`
    width: 30%;
    height: 75px;
    margin:0 auto;
    background: white;
    padding: 10px;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius:5px;
    background: #eee;
    box-shadow: 0 8px 8px -4px grey;
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
    
      <div style={{
        width:'100%',
        margin:'0 auto',
        padding:10,
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
      
      <Heading>NYS Medical Facility Directory</Heading>
      <Form onSubmit={(e) => {
        setUrl(`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`)
        e.preventDefault()       
        }}>
            <input type="text" value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <Button type="button" onClick={() => setUrl(`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${query}`)}>
            Search
            </Button>
      </Form>
      {isError && <div>Something went wrong ...</div>}
        { 
             isLoading  ? (
            <div>  <Ring/> </div>
            ) : (
        <Wrapper>
        {
          data.length > 0 ? <Table data={data}/> 
                : <NoData>
                      No Data
                  </NoData>
        }
        </Wrapper>  
        )}
      </div>
  );
}

export default App;