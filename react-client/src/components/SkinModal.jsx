import React from 'react';
import Footer from './Footer.jsx';
import acne from "../assests/acne.png";
import pores from "../assests/pores.png";
import redness from "../assests/redness.png";
import dryness from "../assests/dryness.png";
import styled ,{keyframes} from 'styled-components';
import {Redirect , Link} from 'react-router-dom';


const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 100%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.2;

  }
  100% {
    opacity: 1;

  }
  }
`;

const Container = styled.div`
    background: rgb(34, 34, 34 , 0.6) !important;
    z-index: 2000 !important;
    position: fixed !important;
    top: 0px !important;
    right: 0px !important;
    bottom: 0px !important;
    left: 0px !important;
`;


const Shell = styled.div`
    padding: 40px !important;
    align-items: center !important;
    margin-left :21%;
    margin-top :5%;
}

`;

const Dialog = styled.div`

    width: 100% !important;
    max-width: 1032px !important;
    border-radius: 12px !important;
    border: solid;
    border-color :rgb(1, 105, 110);
    border-width: 1px;
    position: relative;
    height: 80vh;
    background:rgb(235 200 169);
    animation-duration: 400ms !important;
    animation-iteration-count: 1 !important;
    animation-fill-mode: both !important;
    animation : ${slideIn};

    h1 {
      font-family :papyrus;
      margin-left :22%;
      margin-top :4%;
      color :rgb(1, 105, 110);

    `;

const HeaderBar = styled.div`
position: sticky !important;
text-align: left !important;
top: 0px !important;
display: flex !important;
height: 2% ;

`;

const Button = styled.div`
width : 30px;
height :30px;
margin-left :2%;
margin-top :2%;
border: none !important;
outline: none !important;
cursor: pointer !important;
text-align: center;
border-radius: 50% !important;
font-size :100% ;
color : rgb(1, 105, 110);
p {
  margin-top : 6px;
}
: hover {
    background-color:rgb(222 153 91);
}


}



`;

const Types = styled.div`
  display : grid;
  margin-left : 16%;
  margin-top : 6%;
  margin-bottom : 6%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns : 1fr 1fr;
  grid-row-gap :5%;

  img {
    width: 70%;
    display: block;
    : hover {
      width : 55%;
    }
  }

`;


class SkinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,

    });
  }


  render() {
    return (
      <div>
      {this.state.isClicked ? null :
        (
      <Container>
        <Shell>
          <Dialog>
          <HeaderBar>
            <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
          </HeaderBar>
            <h1>How would you describe your skin concerns?</h1>
            <Types>
              <div>
              <Link to = '/redness'>
              <img src ={redness} />
              </Link>
              </div>
              <div>
              <Link to = '/pores'>
              <img src ={pores} />
              </Link>
              </div>
              <div>
              <Link to = '/acneSkin'>
              <img src = {acne} />
              </Link>
              </div>
              <div>
              <Link to = '/dryness'>
              <img src ={dryness} />
              </Link>
              </div>

            </Types>

            <Footer/>
          </Dialog>
        </Shell>
      </Container>
        )}
        </div>
        )

  }
}
export default SkinModal ;