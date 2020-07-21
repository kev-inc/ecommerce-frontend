import React from 'react'
import {Link} from 'react-router-dom'

import top from '../../assets/slide1.jpeg'
import bottom from '../../assets/bottom.jpeg'
import skincare from '../../assets/slide2.jpeg'
import sale from '../../assets/slide3.jpeg'

function CollectionsMenu() {
  return (
    <div id="CollectionsMenu">
      <h1>Featured Collections</h1>
      <hr />
      <div className="grid">
        <div className="row">
          <div className="col">
            <Link className="btn collections-button" style={{ backgroundImage: `url(${top})` }} to='/search/tops'>Tops</Link>
          </div>
          <div className="col">
            <Link className="btn collections-button" style={{ backgroundImage: `url(${skincare})` }} to='/search/skincare'>Skincare</Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Link className="btn collections-button" style={{ backgroundImage: `url(${bottom})` }} to='/search/bottoms'>Bottoms</Link>
          </div>
          <div className="col">
            <Link className="btn collections-button" style={{ backgroundImage: `url(${sale})` }} to='/search/sale'>Sale</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsMenu