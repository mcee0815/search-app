import React from 'react'
import Facility from '../components/Facility' 


function List({data}) {

    return (
        <ul>
        {
        data.length > 0 ?
        
        data.map(facility => {
            
            return <li key={facility.fac_id}>
                        <Facility 
                        phone={facility.fac_phone} 
                        city={facility.city}
                        />
                    </li>
            })
            : <h3>***** no data available *****</h3>
        }
        </ul>
    );
  }

export default List;