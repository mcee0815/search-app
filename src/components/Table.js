import React from 'react'
import Facility from '../components/Facility'
import styled from 'styled-components';

const Wrapper = styled.div`
  width:95%;
  margin:0 auto;
`;


function Table({data}) {
    return (
      <Wrapper>
        <table>
    <tr>
      <th>Phone</th>
      <th>Facility Name</th>
      <th>Description</th>
      <th>Address</th>  
    </tr>
        {
            data.map(facility => {
              return <tr>
              <td>{facility.fac_phone}</td>
              <td>{facility.facility_name}</td>
              <td>{facility.description}</td>
              <td>{facility.address1}</td>
              </tr>
                })
        }
  </table>
  </Wrapper>
    )
  }

export default Table;