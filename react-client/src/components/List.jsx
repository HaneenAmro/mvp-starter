import React from 'react';
import ListItem from './ListItem.jsx';


const List = (props) => {
  console.log(props)
  const comment = props.comments.map(item =>{
    return(
    <ListItem name = {item.name} comment = {item.comment} time ={item.createTime}/>
    )
  })

console.log(props.comments)
  return(
  <div>
    {comment}
  </div>
  )
}

export default List;