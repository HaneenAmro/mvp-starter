import React from 'react';
import Footer from './Footer.jsx';
import volume from "../assests/volume.png";
import end from "../assests/end.png";
import frizzy from "../assests/frizzy.png";
import dry from "../assests/dry.png";
import styled from 'styled-components';
import {Redirect , Link} from 'react-router-dom';


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

    h1 {
      font-family :papyrus;
      margin-left :25%;
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
  margin-left : 20%;
  margin-top : 7%;
  margin-bottom : 9%;
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


class HairModal extends React.Component {
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
            <h1>How would you describe your hair?</h1>
            <Types>
              <div>
              <Link to = '/hairLoss'>
              <img src ={volume} />
              </Link>
              </div>
              <div>
              <Link to = '/frizzyHair'>
              <img src ={frizzy} />
              </Link>
              </div>
              <div>
              <Link to = '/dryHair'>
              <img src = {dry}/>
              </Link>
              </div>
              <div>
              <Link to = '/splitEnds'>
              <img src ={end} />
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
export default HairModal ;