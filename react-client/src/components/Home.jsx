import React from 'react';
import logo from '../assests/logo.png';
import face from '../assests/logoFace.png';
import styled from 'styled-components';
import HairModal from './HairModal.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';



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
gap: 20%;


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

`;


class Home extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      hairClicked : false,
      skinClicked : false
    }
    this.handleClick1= this.handleClick1.bind(this);
    this.handleClick2= this.handleClick2.bind(this);
  }


  handleClick1(e) {

    this.setState ({
      hairClicked : !this.state.hairClicked,
    })
    e.preventDefault();
  }
  handleClick2(e) {
    this.setState ({
      skinClicked : !this.state.skinClicked,
    })
  }

  render (){
    return (
    <div>
      <Header/>
      <Intro>
        <h1>Hi beautiful</h1>
        <h2>Get a beauty homemade recipes by your hair & skin concern ! </h2>
      </Intro>
      <Photos>
        <Img1 src = "https://tse2.mm.bing.net/th?id=OIP.s-xh6RSDg9cLW5VKLX9CYgHaHs&pid=Api&P=0&w=300&h=300"/>
        <Img2 src = "http://4.bp.blogspot.com/-Ow9Npy7LSls/T_QpCRPo4tI/AAAAAAAABf8/UmLt1dNZ-QU/s1600/Natural+Herbs+That+Can+Maintain+Healthy+Skin+(1).jpg"/>
      </Photos>
      <Buttons>
        <button onClick = {this.handleClick1}>Hair</button>
        <button onClick = {this.handleClick2} >Skin</button>
      </Buttons>
      <Footer/>
      {this.state.hairClicked ? < HairModal/> : null }

    </div>
    )
  }
}
export default Home;