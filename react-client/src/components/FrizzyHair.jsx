import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import tea from '../assests/tea.png';
import yogurt from '../assests/yogort.png';
import jojoba from '../assests/jojoba.png';
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
  margin-left : 26%;
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

class FrizzyHair extends React.Component {
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
      <h1>Frizzy Hair</h1>
      <h2> These easy hair mask recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
      <Wrapper>
      <Wrap>
        <Img src ={tea}/>
        <Bar onClick ={this.handleClick1}><span>Chamomile tea</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={jojoba}/>
        <Bar onClick ={this.handleClick2}><span>Jojoba Oil Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={yogurt}/>
        <Bar onClick ={this.handleClick3}><span>yogurt Mask</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
        <Recipe>
        <h2>Chamomile tea recipe</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 ounce dried chamomile flowers</li>
          <li>6 cups water</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>In a large pot bring 6 cups of water to a rolling boil.  Add the dried chamomile flowers to the pot, stir, then remove from heat.  Let sit until just warm.Strain the tea into a plastic pitcher.</li>
          <li> Position your head over the pot.  Pour the tea from the pitcher through your hair, catching the tea in the pot beneath.  Repeat until hair is completely soaked.  Squeeze out excess tea so that your head is not dripping too much.  Place the towel over your shoulders to catch any tea.  Return the remaining tea from the pot back to the pitcher.  Blow dry your hair until it is dry again.</li>
          <li>Repeat step 2 twice more, soaking the hair, drying, then soaking and drying again.  When finished, leave hair unwashed and without product for 12 to 24 hours, then wash and style hair as usual.</li>
        </ul>

        </Recipe>
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Jojoba Oil Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1tbsp of jojoba oil</li>
          <li>1tbsp of honey</li>
        </ul>
        <h3>Directions:</h3>
        <ul>
          <li>Take a tablespoon of jojoba oil and honey and heated up a little.</li>
          <li>Mix everything well to get a homogeneous mass.</li>
          <li>Apply this mask on your entire volume of hair and leave it for half an hour.</li>
          <li>Covering your head with hair cap.</li>
          <li>Wash your head with warm water and shampoo familiar to your hair.</li>
        </ul>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>yogurt Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 cup plain yogurt</li>
          <li>1 tablespoon olive oil</li>

        </ul>
        <h3>Directions:</h3>
        <p>Combine the yogurt and olive oil in a bowl. Apply from the ends of your hair to the root and let sit for 10 minutes. Rinse well.
        Also give my advanced recipe for a DIY hair mask for frizzy hair a try. Crafted using shea butter, organic carrier oils and essential oils from Mountain Rose Herbs, this homemade hair mask recipe combats frizz resulting from high humidity. It can also help mend some of the damage from sun or the drying effects of pool chlorine.</p>
        </Recipe>
      </Dialog> : null}

      <Footer/>
      {this.state.comments ? <Comments/> : null}

    </div>
    )
  }
}

export default FrizzyHair;