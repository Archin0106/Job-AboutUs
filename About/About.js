import React from 'react'
import img from '../images/image3.jpg';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import './About.css'

export default function About() {
  return (
    <div>
      <div className="row ">
        <div className="col">
          <h1 id="Question">Are You looking For A Job ?</h1>
        </div>
        <h1 id="Question">Some Top Companies.</h1>
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-9 col-md-3 col-lg-2">
        <div class="card m-3 bg-light">
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google</h5>
    <p class="card-text">Google LLC is an American multinational technology company that focuses on artificial intelligence,search engine technology,online advertising,cloud computing,computer software.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
        <div className="col-9 col-md-3 col-lg-2 mb-2">
        <div class="card m-3 bg-light">
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Microsoft</h5>
    <p class="card-text">Microsoft Corporation, commonly known as Microsoft, is an American multinational technology corporation which produces computer software, consumer electronics, personal computers.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
        <div className="col-9 col-md-3 col-lg-2">
        <div class="card m-3 bg-light">
  <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Amazon</h5>
    <p class="card-text">Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
        <div className="col-9 col-md-3 col-lg-2">
        <div class="card m-3 bg-light">
  <img src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Wipro</h5>
    <p class="card-text">Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
        <div className="col-9 col-md-3 col-lg-2">
        <div class="card m-3 bg-light">
  <img src={img5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Walmart</h5>
    <p class="card-text">Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores from the United States.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
      </div>
    </div>
      </div>
      <div className="row ">
        <div className="col-12">
        <img className= "Aboutimage"src={img} alt="about" />
        </div>
      </div>
      <div className="row">
           <div className="col-12">
            <h1 className="welcome">Welcome to JobHunt</h1>
            <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
           </div>
      </div>

      <div className="row">
        <div className="icon col-12">
      
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram-square"></i>
        </div>
      </div>

    </div>
  )
}
