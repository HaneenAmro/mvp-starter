import React from 'react';
import styled from 'styled-components';
import Comments from './Comments.jsx';


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




class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      comment : '',
      submited : false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange =this.handleChange.bind(this);
  }


  handleChange(e){
    this.setState({
      [e.target.name] :e.target.value,
    })

  }

  handleSubmit() {
    this.setState({
        submited : !this.state.submited,
    });
    const body = this.state;
    fetch('/comments', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(this.props.getAllComments)
    .then(json => console.log(json))
  }

  render() {
    console.log("hereForm")
    return (
     <div>
     {!this.state.submited ?
     <div>
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
      </div> : <Comments/>}
      </div>
    )
  }
}

export default Form;