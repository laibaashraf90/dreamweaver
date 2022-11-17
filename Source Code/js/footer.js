document.querySelector("footer").innerHTML = `
<div class="container py-5">
      <div class="row">
        <div class="col-md-4 d-flex align-items-center">
          <a href="index.html">
            <img class="logo" src="./images/D.png">
          </a>
          <p class="desc">This is Dream Weaver. We provide service of cloths.</p>
        </div>
        <div class="col-md-2">
          <h3 class="title">links</h3>
          <div class="linkContainer">
            <a href="./index.html">Home Page</a>
            <a href="./detail.html">Detail </a>
            <a href="./contact.html">ContactUs</a>
            <a href="./Comparing.html">Comparing</a>
          </div>
        </div>
        <div class="col-md-3">
          <h3 class="title">newslatter</h3>
          <form class="d-flex justify-content-center flex-column">
            <input type="email" maxlength="30" placeholder="Your Email Address" required>
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
        <div class="col-md-3 d-flex justify-content-center flex-column align-items-center">
          <h3 class="title">contact</h3>
          <p class="znc">02,shah faisal colony<br>
            3218 karachi, <br>Pakistan karachi</p>
          <div class="social-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
    </div>
`