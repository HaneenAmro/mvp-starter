import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import apple from '../assests/apple.png';
import cofffe from '../assests/cofffe.png';
import strawberry from '../assests/strawberry.png';
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

class Redness extends React.Component {
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
      <h1>Redness</h1>
      <h2> These easy skin recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
     <Wrapper>
      <Wrap>
        <Img src ={apple}/>
        <Bar onClick ={this.handleClick1}><span>Apple Cider Vinegar Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={strawberry}/>
        <Bar onClick ={this.handleClick2}><span>Strawberry Face Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={cofffe}/>
        <Bar onClick ={this.handleClick3}><span>Coffee & Yogurt Face Mask</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
        <Recipe>
        <h2>Apple Cider Vinegar Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>3 tablespoons of green tea .</li>
          <li>1 ½ tablespoons of dry oatmeal.</li>
          <li>1 teaspoon of honey </li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Brew 1 cup of green tea,While it’s still hot, mix 3 tablespoons of green tea with 1 ½ tablespoons of dry oatmeal.</li>
          <li>Stir well and let the oatmeal sit for 2 minutes,Add 1 teaspoon of honey and stir until the honey has dissolved,Add 1 tablespoon of apple cider vinegar and 2 tablespoons of plain yogurt.</li>
          <li>Mix until you’ve created a thick paste,Wash your face and neck with warm water and an oil-free cleanser to remove makeup and open pores.</li>
          <li>Apply the mixture evenly and let it dry for 15 minutes ,Remove the mask with lukewarm water, gently scrubbing with a soft washcloth if necessary.</li>
          <li>Splash your skin with cool water to close pores, and then pat dry with a soft towel.</li>
        </ul>
        </Recipe>
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Strawberry Face Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li> ¼ cup of mashed strawberries.</li>
          <li>1 tablespoon of honey.</li>
          <li>1 tablespoon of yogurt.</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Add ¼ cup of mashed strawberries into a mixing bowl.</li>
          <li>Add 1 tablespoon of honey and 1 tablespoon of yogurt,Mix well.</li>
          <li>Wash your face and neck with warm water and an oil-free cleanser to remove makeup and open pores,Apply the mixture evenly and let it dry for 15 minutes.</li>
          <li>Remove the mask with lukewarm water, gently scrubbing with a soft washcloth if necessary,Splash your skin with cool water to close pores, and then pat dry with a soft towel.</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Coffee & Yogurt Face Mas</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 tablespoons of dry coffee grounds .</li>
          <li>2 tablespoons of dry cocoa.</li>
          <li>3 tablespoons of plain yogurt.</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Add 2 tablespoons of dry coffee grounds and 2 tablespoons of dry cocoa powder into a mixing bowl,Add 3 tablespoons of plain yogurt, Mix well</li>
          <li>Wash your face and neck with warm water and an oil-free cleanser to remove makeup and open pores,Drizzle in 1 tablespoon of honey and stir.</li>
          <li>Apply the mixture evenly and let it dry for 15 minutes,Remove the mask with lukewarm water, gently scrubbing with a soft washcloth if necessary.</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      <Footer/>
      {this.state.comments ? <Comments/> : null}

    </div>
    )
  }
}

export default Redness;