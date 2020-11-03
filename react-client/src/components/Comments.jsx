import React from 'react';
import Footer from './Footer.jsx';
import styled from 'styled-components';
import ScrollArea from 'react-scrollbar';


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

const Comment =styled.div``;
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

const Add = styled.div`
margin-bottom :12%;
`;
const Wrap1 = styled.div`
max-width: 850px !important;
border-radius: 12px !important;
border: solid;
border-color :rgb(1, 105, 110);
border-width: 1px;
position: relative;
height: 40vh;
background:white;
margin-left : 9%;
margin-top :-1%;
box-shadow: 10px 10px 8px rgb(1, 105, 110);
font-family :papyrus;
color : rgb(1, 105, 110);


input {
  width :38vw;
  margin-left : 0px;
  margin-bottom : 5%;
  border-color : rgb(1, 105, 110);
  box-shadow: 2px 2px 1px inset rgb(1, 105, 110);
  height :10vh;
  outline :none;


  }
}
label {
  display : block;
  margin-left : 6%;
  margin-top : 6%;


}`
;
const Label = styled.label`

input {
  width :20vw;
  height :3vh;
  margin-left :0%;
}



`;






class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      comments :false,
      name :'',
      comment :'',
      createTime :''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange =this.handleChange.bind(this);
    this.getAllComments = this.getAllComments.bind(this);

  }


  componentDidMount() {
    this.getAllComments();
  }

  getAllComments () {
    fetch('/comments')
    .then(res => res.json())
    .then(json => this.setState({
      name : json.name ,
      comment :json.comment,
      createTime : json.createTime
    }))
    .then( res => console.log(this.state))

  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,

    });
  }
  handleChange(e){
    this.setState({
      [e.target.name] :e.target.value,
    })

  }

  handleComment(){
    this.setState({
      comments: !this.state.comment,
    });
  }

  handleSubmit() {
    const body = this.state;
    fetch('/comments', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(this.getAllComments())
    .then(json => console.log(json))
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
         {!this.state.comments ? <Comment>
          <h1>Comments</h1>
            <Wrap>
              <ScrollArea>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
              </ScrollArea>
            </Wrap>
            <Button1 onClick ={this.handleComment}>Add Comment</Button1>
          </Comment>

        : <Add>
          <h1>Add comment</h1>
            <Wrap1>
              <Label>
                <div>
                Your Name
                </div>
                <input name='name' type="text" value ={this.state.name} onChange={this.handleChange}></input>
              </Label>
              <label>
                Your comment
                <input name= 'comment' type="text" value ={this.state.comment} onChange={this.handleChange}></input>
              </label>
            </Wrap1>
            <Button1 onClick ={this.handleSubmit}>Submit</Button1>
         </Add>  }
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