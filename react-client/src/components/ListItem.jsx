import React from 'react';
import styled from 'styled-components';
import face from '../assests/logoFace.png';

const Wrap = styled.div`

margin-left : 1%;
  img {
    width: 4%;
    height :4%;
    border-radius :50%;
    margin-top : 2%;
  }
  font-family :papyrus;
  color :rgb(1, 105, 110);

  h6 {
    color :rgb(222 153 91);
    margin-top : -2%;
    margin-left : 60%;
  }

  p{
    margin-top : -1%;
  }

  span {
    margin-left :1%;
  }
`;

const Head = styled.div`
  display : flex ;
  flex-direction : row;

  h3{
    margin-left : 1%;
    color :rgb(222 153 91);
  }


`;

const ListItem = (props) => (
  <Wrap>
    <Head>
    <img src ={face}/>
    <h3>{props.name}</h3>
    </Head>
    <p>{props.comment}</p>
   {/* // <h6>{props.time}</h6> */}
   <span>_______________________________________________________</span>
  </Wrap>
)

export default ListItem;