import React from 'react'
import {Link} from 'react-router-dom'

function CartItem(props) {
  return(
    <div id="CartItem">
      <div className="grid mb-2">
        <div className="row">
          <div className="col-3">
            <img src={props.item.img[0]} alt="thumbnail" style={{width: '100%'}}/>
          </div>
          <div className="col-6 text-left d-flex align-items-center">
            <Link className='h5 text-dark aparey'>{props.item.name}</Link>
            <button className="btn btn-link" onClick={() => props.removeFromCart(props.item, props.index)}>Delete</button>
          </div>
          <div className="col-3 d-flex align-items-center">
            <h5 className='ml-auto montserrat'>${props.item.price}</h5>
          </div>
        </div>
      </div>
    </div>
    // <div id="CartItem" className="d-flex flex-row align-items-center mb-2">
    //   <img src={props.item.img[0]} width='200' height='200' alt="thumbnail" className='mr-4'/>
    //   <Link className='h5 text-dark aparey'>{props.item.name}</Link>
    //   <h5 className='ml-auto montserrat'>${props.item.price}</h5>
    // </div>
  )
}

export default CartItem