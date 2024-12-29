import React from "react";

import logo from '../logo.png';

function NavHeader() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="blog logo" style={{ maxWidth:'100%'}}/>
        </a>

  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">CreateBlog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bloggers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">signout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavHeader;