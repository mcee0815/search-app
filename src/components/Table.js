import React from 'react'
// import Facility from '../components/Facility'
import styled from 'styled-components';

const TableWrap = styled.div`
  width:100%;
  margin:0 auto;
`;

function Table({data}) {
    return (
      <TableWrap>
        <table>
          <tbody>
              <tr className="t-header">
                <th>Phone</th>
                <th>Facility Name</th>
                <th>Description</th>
                <th>Address</th>  
              </tr>
                  {
              data.map(facility => {
                return <tr key={facility.fac_id}>
                <td>{facility.fac_phone}</td>
                <td>{facility.facility_name}</td>
                <td>{facility.description}</td>
                <td>{facility.address1}</td>
                </tr>
                  })
          }
          </tbody>
        </table>
      </TableWrap>
    )
  }

export default Table;