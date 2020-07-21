import React from 'react'

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
              <a class="nav-link montserrat" href="/tops">Tops</a>
            </li>
            <li class="nav-item">
              <a class="nav-link montserrat" href="/bottoms">Bottoms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link montserrat" href="/skincare">Skincare</a>
            </li>
            <li class="nav-item">
              <a class="nav-link montserrat" href="/sales">Sales</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar