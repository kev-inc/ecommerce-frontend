import React from 'react'
import {Link} from 'react-router-dom'


function ItemCard(props) {
  return(
    <div id="ItemCard">
      <Link className="btn itembtn mb-4" style={{backgroundImage: `url(${props.details.img[0]})`}} to={`/view/${props.details.id}`}></Link>
      <h5>{props.details.name}</h5>
      <h4>${props.details.price}</h4>
    </div>
  )
}

export default ItemCard