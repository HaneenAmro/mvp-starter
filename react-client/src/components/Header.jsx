import React from 'react';
import styled from 'styled-components';
import logo from '../assests/logo.png';


const Header1 = styled.div`
  display: flex;
  justify-content: ;
  margin-top : 3%;

`;

const Logo = styled.img`
width: 35%;
margin-left : 25%;

`;

const Bar = styled.div`
  background-color :rgb(1, 105, 110);
  height :20px;
  width: 100%;
  margin-top : 3%;
  margin-left : -8%;
  margin-right : 2%;

`;

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Header1>
        <div>
          <Logo src={logo} />
        </div>
        <Bar></Bar>
      </Header1>
      </div>
    )
  }
}

export default Header ;