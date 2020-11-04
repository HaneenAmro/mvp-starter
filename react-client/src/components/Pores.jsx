import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import cucumber from '../assests/cucumber.png';
import almond from '../assests/almond1.png';
import baking from '../assests/baking.png';
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

class Pores extends React.Component {
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
      <h1>Oliness & Large Pores</h1>
      <h2> These easy skin recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
     <Wrapper>
      <Wrap>
        <Img src ={cucumber}/>
        <Bar onClick ={this.handleClick1}><span>Rosewater,Lemon,Cucumber</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={almond}/>
        <Bar onClick ={this.handleClick2}><span>Lime and Almond Juice</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={baking}/>
        <Bar onClick ={this.handleClick3}><span>Baking Soda and Water</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
        <Recipe>
        <h2>Rosewater,Lemon,Cucumber</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>Cucumber </li>
          <li>lemon</li>
          <li>Rosewater</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Get one cucumber and peel off the skin.</li>
          <li>Use a mortar and pestle to crush the cucumber flesh.</li>
          <li>Add some drops of fresh lemon juice and one teaspoon of rosewater to the cucumber.</li>
          <li>Mix the ingredients thoroughly,Soak a clean washcloth in the mixture.</li>
          <li>Put the cloth over your face and leave it there for a couple of minutes ,Rinse with cold water.</li>
        </ul>
        </Recipe>
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Lime and Almond Juice</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>Water.</li>
          <li>Almond.</li>
          <li>Lime.</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Pour water in a small container,Soak a couple of almonds in the water for 24 hours.</li>
          <li>The next day, mash the almonds until it forms a paste,Add one teaspoon of fresh lime juice to the paste.</li>
          <li>Apply the mixture on your face and leave it there for thirty minutes,Wash of the mixture with cold water.
</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Baking Soda and Water</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>Baking soda.</li>
          <li>Water.</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>In a clean bowl, mix two tablespoons of water and two tablespoons of baking soda.</li>
          <li>Once the mixture has a paste-like consistency, massage it on your face using circular or upward strokes.</li>
          <li>Leave the paste on your face for fifteen minutes.</li>
          <li>Rinse with cold water.</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      <Footer/>
      {this.state.comments ? <Comments/> : null}

    </div>
    )
  }
}

export default Pores;