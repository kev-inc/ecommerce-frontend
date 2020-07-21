import React from 'react'

import top from '../../assets/slide1.jpeg'
import bottom from '../../assets/bottom.jpeg'
import skincare from '../../assets/slide2.jpeg'
import sale from '../../assets/slide3.jpeg'

function CollectionsMenu() {
  return(
    <div id="CollectionsMenu">
      <h1>Featured Collections</h1>
      <hr/>
      <div className="grid">
        <div className="row">
          <div className="col">
            <button className="btn collections-button" style={{backgroundImage: `url(${top})`}}>Tops</button>
          </div>
          <div className="col">
          <button className="btn collections-button" style={{backgroundImage: `url(${skincare})`}}>Skincare</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <button className="btn collections-button" style={{backgroundImage: `url(${bottom})`}}>Bottoms</button>
          </div>
          <div className="col">
          <button className="btn collections-button" style={{backgroundImage: `url(${sale})`}}>Sale</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsMenu