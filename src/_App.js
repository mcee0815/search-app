import { useEffect,useState } from 'react';
import './App.css';
import List from './components/List'
import PhoneNumber from './components/PhoneNumber';

// const DUMMIE_DATA = [{number:'631-796-3913'},{number:'123456789'},{number:'123343437'},{number:'167874567'}]

const getHealthData = async (zip) => {
  try {
         
    let response = await fetch (`https://health.data.ny.gov/resource/vn5v-hh5r.json?fac_zip=${zip}`)
     
      if (!response.ok) {    
            throw new Error('resource unavailable')
        } else {
            // console.log (await response.json());
            return await response.json()
        }
    
} catch (err) {
   console.log(err)
}
}

function App() {

  // Declare a new state variable, which we'll call "Data"
  const [Data, setData] = useState([]);
  
  useEffect( () => {
    let data =  getHealthData('11763');
        data.map(element => {
          console.log(element.fac_phone)
          return <PhoneNumber phonenumber={element.fac_phone}/>
        });
        //console.log( data)
        setData(data)
  },[])
  
  return (
    <div className="App">
      <h2>Phone Directory</h2>
      <List data = {Data} />
    </div>
  );
}

export default App;
