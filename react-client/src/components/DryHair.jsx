import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import cocoNut from '../assests/coconut.png';
import cocoOil from '../assests/cocoOil.png';
import pumpkin from '../assests/pumpkin.png';
import styled from 'styled-components';



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

class DryHair extends React.Component {
  constructor (props){
    super(props);
    this.state ={
      oilClicked : false,
      cocoClicked: false,
      pumpkinClicked :false,
      xButton :false
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick = this.handleClick.bind(this);

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

  render() {


    return (
    <div>
      <Header/>
      <Intro>
      <h1>Dry Hair</h1>
      <h2> These easy hair mask recipes can be made at home using simple ingredients from your kitchen </h2>
      </Intro>
     <Wrapper>
      <Wrap>
        <Img src ={cocoOil}/>
        <Bar onClick ={this.handleClick1}><span>Coconut Oil Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img  src={cocoNut}/>
        <Bar onClick ={this.handleClick2}><span>Coconut Milk Mask</span></Bar>
      </Wrap>
      <Wrap>
      <Img src={pumpkin}/>
        <Bar onClick ={this.handleClick3}><span>Pumpkin Mask</span></Bar>
      </Wrap>
      </Wrapper>
      {this.state.oilClicked ? <Dialog>
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
      </Dialog> : null }

      {this.state.cocoClicked? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Coconut Milk Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 can of unsweetened coconut milk</li>
          <li>a few drops of essential oil if you like (totally not necessary, but if you have them on hand it can be luxurious).</li>
        </ul>
        <h3>Directions:</h3>
        <p>IPour a can or bottle of unsweetened coconut milk in a bowl and refrigerate overnight so it hardens. Section hair into 3-5 sections and section, by section, apply the milk from roots to ends of your hair (hair should be dry when applied). Cover head with a shower cap and leave the mask on for about 20 minutes. Rinse hair in the shower and comb out.</p>
        </Recipe>
      </Dialog> : null}

      {this.state.pumpkinClicked ? <Dialog>
        <Button onClick={this.handleClick}>
              <p>&#10005;</p>
            </Button>
      <Recipe>
        <h2>Pumpkin Mask</h2>
        <h3>Ingredients:</h3>
        <ul>
          <li>½ cup pumpkin or sweet potato puree</li>
          <li>¼ cup plain yogurt</li>
          <li>3 tablespoons honey</li>
        </ul>
        <h3>Directions:</h3>
        <p>Combine all of the ingredients in a small bowl. Apply to dry hair and place a shower cap on your hair to prevent staining. Let sit for 20 minutes. Rinse and wash as usual.
        Also be sure to try my moisturizing hair mask recipe with sea buckthorn oil. Formulated with hydrating cocoa butter, essential oils and sea buckthorn oil, this homemade hair mask for dry hair is the perfect remedy for dry, dull hair. As this DIY hair mask contains a preservative, you can make a batch and use it as needed throughout the season.</p>
        </Recipe>
      </Dialog> : null}

      <Footer/>


    </div>
    )
  }
}

export default DryHair;