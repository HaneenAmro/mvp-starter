import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import honey from '../assests/honey.png';
import banana from '../assests/banana.png';
import coconut from '../assests/cocoOil.png';
import styled from 'styled-components';
import Comments from './Comments.jsx';

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
margin-top : -26%;
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

class SplitEnds extends React.Component {
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
        <img onClick={this.handleComment} src = "http://www.clker.com/cliparts/P/J/7/t/u/O/orange-plus-sign-hi.png"/>
        <img  src ="https://tse4.mm.bing.net/th?id=OIP.FaHhw_GcZn7rHrVc5uATbgHaHa&pid=Api&P=0&w=300&h=300"/>
      </Inter>
      <Header/>
      <Intro>
      <h1>Split Ends Hair</h1>
      <h2> These easy hair mask recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
      <Wrapper>
      <Wrap>
        <Img src ={banana}/>
        <Bar onClick ={this.handleClick1}><span>Banana Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={honey}/>
        <Bar onClick ={this.handleClick2}><span>Honey Treatment</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={coconut}/>
        <Bar onClick ={this.handleClick3}><span>Coconut Oil Mask</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
        <Recipe>
        <h2>Banana Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 ripe banana</li>
          <li>1 tablespoon olive oil</li>
        </ul>
        <h3>Directions:</h3>
        <p>
          Mash the banana with a fork. Add olive oil. Continue to stir and mask until there are no lumps. It should be frothy and creamy. Apply to your hair and let sit for 15 minutes. Rinse well and wash.
        </p>
        </Recipe>
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Honey Treatment</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>3 tablespoons of olive oil</li>
          <li>2 tablespoons of raw honey</li>
        </ul>
        <h3>Directions:</h3>
        <p>Apply the mixture to shampooed hair and leave it in for 20 to 30 minutes. Rinse it out and then wash your hair with a clarifying shampoo </p>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Coconut Oil Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 tablespoons coconut oil</li>
          <li>1 egg</li>
        </ul>
        <h3>Directions:</h3>
        <p>If your coconut oil is a solid, place it in hot water to soften. Mix the egg well and add the melted or softened coconut oil. Spread on your hair and let sit for one to two hours. You can also leave it on overnight.
        Rinse well and wash your hair as usual.</p>
        </Recipe>
      </Dialog> : null}
      <Footer/>

      {this.state.comments ? <Comments/> : null}


    </div>
    )
  }
}

export default SplitEnds;