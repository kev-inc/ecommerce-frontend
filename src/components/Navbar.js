import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand aparey" href="/">la mode classique</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link montserrat mr-2" to="/search/tops">Tops</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link montserrat mr-2" to="/search/bottoms">Bottoms</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link montserrat mr-2" to="/search/skincare">Skincare</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link montserrat mr-2" to="/search/sale">Sale</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link montserrat" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar