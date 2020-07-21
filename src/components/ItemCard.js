import React from 'react'
import { Link } from 'react-router-dom'


function ItemCard(props) {
  return (
    <div id="ItemCard" className='mb-4'>
      <Link className='text-dark' to={`/view/${props.details.id}`}>
        <img src={props.details.img[0]} alt='top' style={{ height: '240px', width: '180px', objectFit: 'cover', marginBottom: '12px' }} />
        <h5>{props.details.name}</h5>
        <h4>${props.details.price}</h4>
      </Link>
    </div>
  )
}

export default ItemCard