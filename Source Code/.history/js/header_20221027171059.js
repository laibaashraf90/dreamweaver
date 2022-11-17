document.querySelector("nav").classList.add("bfs")
document.querySelector("nav").classList.add("navbar")
document.querySelector("nav").classList.add("navbar-dark")
document.querySelector("nav").classList.add("sticky-top")
document.querySelector("nav").innerHTML=`
<div class="container-fluid">
      <a class="navbar-brand" href="">
        <img class="logo" src="./images/D.png">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark navbar-collapse" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Orient _ Gul-Ahmed collection.html">Orient & Gul-Ahmed Women Collection</a>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="./j.Asim Jofa Wedding Collection.html">J. & Asim Jofa Women Wedding
                Collection</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./women Jeans.html">Out Fitters & Zara's Women Jeans Collection</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="j. mens formal_Wedding Collection.html">J.mens formal&Wedding Collection</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./gulahmedmens.html">Gul-Ahmed Mens Collection</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./mensjeans.html">Zara's Mens Shirts & Paint Collection</a>
            </li>

            
            <li class="nav-item">
              <a class="nav-link" href="./comparing.html">Comparing Page</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./detail.html">Details</a>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="./contact.html">Contact</a>
            </li>

          </ul>

        </div>

`