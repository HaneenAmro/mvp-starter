import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import honeyCinamon from '../assests/honeyCinamon.png';
import greenTea from '../assests/greenTea.png';
import teaTree from '../assests/teaTree.png';
import styled from 'styled-components';
import Comments from './Comments.jsx';
import {Redirect , Link} from 'react-router-dom';

const Inter = styled.div`
margin-left: 90%;
margin-top: 1%;
position: absolute;
display : flex;
flex-direction: row;


img {
  width: 2vw;
  height: 3vh;
  margin-right:50%;
  : hover {
    opacity : 0.4;
  }
}
`;

const Intro = styled.div`
font-family :papyrus;
font-size: 90%;
color : rgb(222 153 91);
display: flex;
flex-direction: column;
margin-left : 25%;
margin-bottom : 2%;

h1 {
  margin-left : 20%;

}


`;

const Wrapper =styled.div`
  display :flex;
  flex-direction: column;
  margin-bottom : 6%;

`;

const Wrap = styled.div`
  display :flex;
  flex-direction: row;
  margin-bottom: 2%;
  margin-left :6%;


`;
const Img = styled.img`
  border-radius :50%;
  width :120px;
  height :120px;

`;

const Bar = styled.div`

background-color:rgb(222 153 91);
height :6vh;
width :35vw;
margin-top : 1.7%;
border-radius :22%;
font-family :papyrus;
font-size: 35px;
color :rgb(1, 105, 110);

span {
  margin-left: 22%;
}

  :hover {
  background-color:rgb(1, 105, 110);
  color :rgb(222 153 91);


`;

const Dialog = styled.div`
position: absolute;
background:rgb(235 200 169);
height :50vh;
width :40vw;
margin-left: 55%;
margin-top : -32%;
border-radius :10%;

`;

const Button = styled.div`
width : 30px;
height :30px;
margin-left :90%;
margin-top :3%;
border: none !important;
outline: none !important;
cursor: pointer !important;
text-align: center;
border-radius: 50% !important;
font-size :100% ;
color : rgb(1, 105, 110);
: hover {
    background-color:rgb(222 153 91);
}

}

`;

const Recipe =styled.div`
z-index: 2000;
font-family :papyrus;
color :rgb(1, 105, 110);
margin-left :5%;
margin-top :1%;
font-weight: bold;

`;

class AcneSkin extends React.Component {
  constructor (props){
    super(props);
    this.state ={
      oilClicked : false,
      cocoClicked: false,
      pumpkinClicked :false,
      xButton :false,
      comments :false

    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);

  }


  handleClick1(){
    this.setState({
      oilClicked : !this.state.oilClicked,
    })
  }
  handleClick2(){
    this.setState({
      cocoClicked : !this.state.cocolClicked,
    })
  }
  handleClick3(){
    this.setState({
     pumpkinClicked : !this.state.pumpkinClicked,
    })
  }

  handleClick(){
    this.setState({
    xButton : !this.state.xButton,
    })
    window.location.reload();
  }

  handleComment() {
    this.setState({
      comments : !this.state.comments,
    })
  }

  render() {


    return (
    <div>
      <Inter>
        <img onClick={this.handleComment} src = "https://wpclipart.com/dl.php?img=/signs_symbol/speech_bubbles/speech_solid/comment_bubble_solid_orange_right_T.png"/>
        <Link to ="/">
        <img  src ="https://www.ownyourhome.gov.uk/wp-content/uploads/2015/09/generic-home-scheme-logo.png"/>
        </Link>
      </Inter>
      <Header/>
      <Intro>
      <h1>Acne & Belmish</h1>
      <h2> These easy skin recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
     <Wrapper>
      <Wrap>
        <Img src ={teaTree}/>
        <Bar onClick ={this.handleClick1}><span>Tea Tree Oil</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={honeyCinamon}/>
        <Bar onClick ={this.handleClick2}><span>Honey and Cinamon Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={greenTea}/>
        <Bar onClick ={this.handleClick3}><span>Green Tea</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
        <Recipe>
        <h2>Tea Tree Oil</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 part tea tree oil </li>
          <li>9 parts water</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Mix 1 part tea tree oil with 9 parts water.</li>
          <li>Dip a cotton swab into the mixture and apply it to affected areas.</li>
          <li>Apply moisturizer if desired.</li>
          <li>Repeat this process 1–2 times per day, as needed.</li>
        </ul>
        </Recipe>
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Honey and Cinamon Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 tablespoons honey.</li>
          <li>1 teaspoon cinnamon .</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Mix 2 tablespoons honey and 1 teaspoon cinnamon together to form a paste.</li>
          <li>After cleansing, apply the mask to your face and leave it on for 10–15 minutes.</li>
          <li>Rinse the mask off completely and pat your face dry.</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Green Tea</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>Bunch of green tea</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Steep green tea in boiling water for 3–4 minutes.</li>
          <li>Allow tea to cool.</li>
          <li>Using a cotton ball, apply tea to skin or pour into a spray bottle to spritz on.</li>
          <li>Allow to dry, then rinse with water and pat dry.</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      <Footer/>
      {this.state.comments ? <Comments/> : null}

    </div>
    )
  }
}

export default AcneSkin;