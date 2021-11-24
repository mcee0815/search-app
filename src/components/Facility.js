import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    display:flex;
    
    padding-left:10px;
    text-align:center;
    width:100%;
    margin-bottom:5px;
    border-radius:3px;
    background:purple;
    color:white;
    font-size:13px;
    font-weight:300;
    @media (min-width: 700px){
        width:70%;
        margin:0 auto;
        margin-bottom:10px;
        
    }
`;
const Item = styled.p`
    margin-right:7px;
`;


const Facility = ({phone,city}) => {
    return(
        <Card>
            <Item>Phone: {phone}</Item>
            <Item> Name: {city}</Item>
        </Card>
    )
}
export default Facility;