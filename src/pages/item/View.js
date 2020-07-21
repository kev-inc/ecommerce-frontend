import React from 'react'
import {data} from '../../assets/mockdata'
import ItemCarousel from './ItemCarousel'

const style={
  addToCart: {
    borderRadius: 0,
    borderWidth: '4px',
    borderColor: 'black'
  }, 
  buyNow: {
    borderRadius: 0,
    backgroundColor: 'black',
    color: 'white',
    borderWidth: '4px',
    borderColor: 'black'
  }
}

function View(props) {
  const itemId = props.match.params.itemId
  const item = data.find(item => item.id === itemId)
  return(
    <div id="View">
      <div className="grid container">
        <div className="row" style={{paddingTop: '128px'}}>
          <div className="col">
            <ItemCarousel imgs={item.img}/>
          </div>
          <div className="col my-auto text-center">
            <h1 className="aparey mb-4">{item.name}</h1>
            <h3 className="montserrat mb-4">${item.price}</h3>
            <hr/>
            <button className="btn montserrat mr-4" style={style.addToCart}>Add to cart</button>
            <button className="btn montserrat" style={style.buyNow}>Buy It Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View