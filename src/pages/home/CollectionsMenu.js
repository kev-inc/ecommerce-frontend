import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../firebase/Firebase'

function CollectionsMenu() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(res => {
      setCategories(res)
    })
    return
  }, [categories])
  return (
    <div id="CollectionsMenu">
      <h1>Featured Collections</h1>
      <hr />
      <div className="grid">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-6 mb-4">
              <Link className="card bg-dark text-white" to={category[1].link}>
                <img src={category[1].imgUrl} alt='top' style={{ objectFit: 'cover', height: '240px', opacity: 0.5 }} />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <h3 className="card-title">{category[1].title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionsMenu