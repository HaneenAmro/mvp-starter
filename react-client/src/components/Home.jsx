import React from 'react';
import logo from '../assests/logo.png';
import face from '../assests/logoFace.png';
import styled from 'styled-components';

const Header = styled.div`
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

const Intro = styled.div`
font-family :papyrus;
font-size: 90%;
color : rgb(222 153 91);
display: flex;
flex-direction: column;
margin-left : 33%;
margin-bottom : 2%;

h1 {
  margin-left : 16%;
}

`;

const Photos = styled.div`
  display: flex;
  justify-content: center;

`;

const Img1 = styled.img`
  border : solid;
  border-color: rgb(1, 105, 110);
  border-radius: 25px;
  width :25%;
  margin-right : 3%;

`;
const Img2 = styled.img`

  border : solid;
  border-color: rgb(1, 105, 110);
  border-radius: 25px;
  width :25%;
  margin-left : 3%;

`;

const Buttons = styled.div`
display: flex;
justify-content: center;

  button {
    color : rgb(1, 105, 110);
    background-color :rgb(222 153 91);
    border-radius: 8px;
    font-size : 40px;
    font-family :papyrus;
    width :10%;
    height :45px;
    border : none ;
    margin-top : 2%;
    cursor: pointer;
    outline: none;


    :hover {
      background-color :rgb(238 208 182);
    }
  }
  button:nth-child(1){
    margin-right : 11%;
  }
  button:nth-child(2){
    margin-left : 11%;
  }

`;

const Footer = styled.div`
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



class Home extends React.Component {
  constructor(props) {
    super (props);

  }

  render (){
    return (
    <div>
      <Header>
        <div>
          <Logo src={logo} />
        </div>
        <Bar></Bar>
      </Header>
      <Intro>
        <h1>Hi beautiful</h1>
        <h2>Get a beauty homemade recipes by your hair & skin concern ! </h2>
      </Intro>
      <Photos>
        <Img1 src = "https://tse2.mm.bing.net/th?id=OIP.s-xh6RSDg9cLW5VKLX9CYgHaHs&pid=Api&P=0&w=300&h=300"/>
        <Img2 src = "http://4.bp.blogspot.com/-Ow9Npy7LSls/T_QpCRPo4tI/AAAAAAAABf8/UmLt1dNZ-QU/s1600/Natural+Herbs+That+Can+Maintain+Healthy+Skin+(1).jpg"/>
      </Photos>
      <Buttons>
        <button>Hair</button>
        <button>Skin</button>
      </Buttons>
      <Footer>
        <Bar1></Bar1>
        <Face src={face} />
        <Bar2></Bar2>
      </Footer>
    </div>
    )
  }
}
export default Home;