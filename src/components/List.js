import React from 'react'
import Facility from '../components/Facility'
import styled from 'styled-components';
const Wrapper = styled.div`
  width:90%;
  padding:10px;

  margin: 0 auto;
`;
const ListItem = styled.li`
  list-style:none;
`;
function List({data}) {
    return (
        <Wrapper>
        {
        data.length > 0 ?
        data.map(facility => {
            return <ListItem key={facility.fac_id}>
                        <Facility 
                          phone={facility.fac_phone} 
                          city={facility.facility_name}
                        />
                    </ListItem>
            })
            : <h3>*** no data to show ***</h3>
        }
        </Wrapper>
    );
  }

export default List;