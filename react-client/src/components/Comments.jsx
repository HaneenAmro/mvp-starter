import React from 'react';
import Footer from './Footer.jsx';
import styled from 'styled-components';


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
      margin-left :10%;
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

const Wrap = styled.div`
max-width: 850px !important;
border-radius: 12px !important;
border: solid;
border-color :rgb(1, 105, 110);
border-width: 1px;
position: relative;
height: 50vh;
background:white;
margin-left : 9%;
margin-top :-1%;
box-shadow: 10px 10px 8px rgb(1, 105, 110);

`;

const Button1 = styled.button`
cursor: pointer !important;
text-align: center;
border-radius: 10% ;
font-size :100% ;
outline :none;
color :rgb(235 200 169);
background-color :rgb(1, 105, 110);
margin-left : 42%;
margin-top :2%;
height : 4vh;
width : 9vw;
: hover {
  opacity:0.6;
}
`;




class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      comment :false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,

    });
  }

  handleComment(){
    this.setState({
      comment: !this.state.comment,
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

          <Comment>
          <h1>Comments</h1>
            <Wrap>

            </Wrap>
            <Button1 onClick ={this.handleComment}>Add Comment</Button1>
          </Comment>
            <Footer/>
          </Dialog>
        </Shell>
      </Container>
        )}
        </div>
        )

  }
}
export default Comments ;