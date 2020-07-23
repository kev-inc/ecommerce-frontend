import React from 'react'
import { Link } from 'react-router-dom'

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
        <div className="row mb-4">
          <div className="col">
            <Link className="card bg-dark text-white" to='/search/tops'>
              <img src={top} alt='top' style={{ objectFit: 'cover', height: '240px', opacity: 0.5 }} />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h3 className="card-title">Tops</h3>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link className="card bg-dark text-white" to='/search/skincare'>
              <img src={skincare} alt='top' style={{ objectFit: 'cover', height: '240px', opacity: 0.5 }} />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h3 className="card-title">Skincare</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Link className="card bg-dark text-white" to='/search/bottoms'>
              <img src={bottom} alt='top' style={{ objectFit: 'cover', height: '240px', opacity: 0.5 }} />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h3 className="card-title">Bottoms</h3>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link className="card bg-dark text-white" to='/search/sale'>
              <img src={sale} alt='top' style={{ objectFit: 'cover', height: '240px', opacity: 0.5 }} />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h3 className="card-title">Sale</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsMenu