import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return(
    <div id="Footer" style={{backgroundColor: '#f6f6f6'}}>
      <div className="grid container aparey" style={{paddingTop:'64px', paddingBottom:'64px'}}>
        <div className="row">
          <div className="col-3">
            <Link className='text-dark'>Return Policy</Link><br/>
            <Link className='text-dark'>Contact Us</Link><br/>
            <Link className='text-dark'>About Us</Link><br/>
          </div>

          <div className="col-3">
            <a href="https://www.instagram.com/lamode_classique/" className='text-dark'>Instagram</a>
          </div>

          <div className="col-6">
            <h6 className='text-right'>© 2020, la mode classique</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer