import React from 'react';
import face from '../assests/logoFace.png';
import styled from 'styled-components';


const Footer1 = styled.div`
  display:flex;
  margin-top : 2%;
  margin-right : 2%;
  margin-left : 4%;
`;

const Bar1 = styled.div`
  background-color :rgb(1, 105, 110);
  height :8px;
  width: 50%;
  margin-top : 1%;
  margin-right : 1%;
`;
const Bar2 = styled.div`
  background-color :rgb(1, 105, 110);
  height :8px;
  width: 50%;
  margin-top : 1%;
  margin-left : 1%;
`;
const Face = styled.img`
  width: 2.5%;

`;


const Footer = ()=>{
  return (
    <Footer1>
    <Bar1></Bar1>
    <Face src={face} />
    <Bar2></Bar2>
  </Footer1>
  )
}

export default Footer;
