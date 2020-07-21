import React from 'react'

function Subscribe() {
  return (
    <div id="Subscribe">
      <div className="container">
        <h3>Subscribe to our newsletter</h3>
        <h6>Sign up for our mailing list and get 15% off your first order</h6>
        <hr />

        <div className="input-group">
          <input type="text" className='form-control custom-input' placeholder='Email address'/>
          <div className="input-group-append">
            <button className="btn custom-btn">Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Subscribe