import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import gelatine from '../assests/gelatine.png';
import almond from '../assests/almond.png';
import avocado from '../assests/avocado.png';
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

class HairLoss extends React.Component {
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
      <h1>Hair Loss</h1>
      <h2> These easy hair mask recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
      <Wrapper>
      <Wrap>
        <Img src ={gelatine}/>
        <Bar onClick ={this.handleClick1}><span>Gelatin Hair Rinse</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={almond}/>
        <Bar onClick ={this.handleClick2}><span>Almond Milk Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={avocado}/>
        <Bar onClick ={this.handleClick3}><span>Avocado Mask</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
        <Recipe>
        <h2>Gelatin Hair Rinse</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 cups water</li>
          <li>1 tsp unflavoured gelatin</li>
          <li>2 drops peppermint essential oil (optional)</li>
        </ul>
        <h3>Directions:</h3>
        <p>
        Apply the rinse on your hair, until your hair is totally saturated. Massage your scalp and hair, and leave in for approximately 5 minutes before rinsing with cool or tepid water. You can use this gelatine rinse once a week.
        </p>


        </Recipe>
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Almond Milk Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>5 tablespoons almond milk</li>
          <li>2 eggs</li>
          <li>2 tablespoons coconut oil</li>
        </ul>
        <h3>Directions:</h3>
       <p>Place the coconut oil in hot water to soften it. Beat two eggs in a bowl. Add almond milk and softened coconut oil. Mix well. Cover all of your hair with the mixture and let sit for 45 minutes. Rinse and wash your hair as usual.</p>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Avocado Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 avocado</li>
          <li>2 tablespoons coconut oil</li>

        </ul>
        <h3>Directions:</h3>
        <p>If your coconut oil is firm, place it in a bowl of hot water until it gets soft or melts.
          Mash the avocado with a fork. Add the soft or melted coconut oil and stir well.
          Spread all over your hair, including the roots and scalp. Let sit for at least 20 minutes and rinse.</p>
        </Recipe>
      </Dialog> : null}

      <Footer/>
      {this.state.comments ? <Comments/> : null}

    </div>
    )
  }
}

export default HairLoss;