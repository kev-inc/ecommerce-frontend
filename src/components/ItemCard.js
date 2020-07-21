import React from 'react'

function ItemCard(props) {
  return(
    <div id="ItemCard">
      <img className="itemcard" src={props.img} alt=""/>
      <h5>{props.title}</h5>
      <h4>${props.price}</h4>
    </div>
  )
}

export default ItemCard