import React from "react";
import Header from "./Header/Header";
import './Home.css';
import CustomButton from "../CustomButton/CustomButton";
import Data from "../Data";
import Slider from "./Carousel/slider";
import BasicForm from "../Form/form";
import Numbers from "../Numbers/Numbers";
import img1 from '../Home/../../assets/images/1.png';
import img2 from '../Home/../../assets/images/2.png';

const Home = ()=>{
  const blogitem = Data.map((item) => (
    <div className="col-lg-4" key={item.id}>
      <div className="box mb-3">
        <img src={item.img} alt="img"/>
          <div className="text m-2">
            <h5 className="mb-0">{item.title}</h5>
            <p className="mb-0">{item.time} | {item.Serves}</p>
            <h3>{item.price} <del className="discount">{item.discount}</del></h3>
          </div>
      </div>
      <CustomButton className="btn order" text={"Order Now"} />
    </div>
  ));

  return(
    <>
    <Header/>
    <Numbers/>
    <section className="pride">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <img src={img1} alt="img1" class="img-fluid rounded"/>
          </div>
          <div className="col-lg-5 text-start align-items-center text">
            <h2 class="text-dark">We pride ourselves on making real food from the best ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <CustomButton className="btn" text="Learn More"/>
          </div>
        </div>
      </div>
    </section>
    <section className="ingredients mb-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-12 text text-start">
        <h2 className="text-dark">
          We make everything by hand with the best possible ingredients.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away,
          behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <ul className="list-unstyled">
          <li><i className="fa fa-check fa-2x me-2"></i>Etiam sed dolor ac diam volutpat.</li>
          <li><i className="fa fa-check fa-2x me-2"></i>Erat volutpat aliquet imperdiet.</li>
          <li><i className="fa fa-check fa-2x me-2"></i>Purus a odio finibus bibendum.</li>
        </ul>
        <div className="space30"></div>
        <CustomButton className="btn" text="Learn More" />
      </div>
      <div className="col-lg-6 col-12">
        <img src={img2} alt="img2" className="img-fluid w-100"/>
      </div>
    </div>
  </div>
</section>

    <section className="poor">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12 text">
          <div class="space80"></div>
            <h2 className="text-dark">When a man's stomach is full it makes no
            difference whether he is rich or poor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <a className="btn" href="https://www.youtube.com/watch?v=bZx8rPd-PKQ"><i className="fa fa-play"></i>Watch Our Story</a>
            <div class="space90"></div>
          </div>
        </div>
      </div>
    </section>
    <section className="blogs">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-12">
            <h2 className="text-dark fs-1">Explore Our Foods</h2>
            <p className="pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
               there live the blind texts. Separated they live in Bookmarksgrove.</p>
          </div>
        </div>
        <div className="serves">
          <div className="row">
            {blogitem}
          </div>
        </div>
      </div>
    </section>
    
    <Slider />

    <section className="asked">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
          <div className="row">
          <div className="col-lg-6 col-12">
            <h4>~ Is Foodera Bread really baked fresh each day?</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
          </div>
          <div className="col-lg-6 col-12">
            <h4>~ Do you bake breads containing animal fats or products?</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
          </div>
          <div className="col-lg-6 col-12">
            <h4>~ Can I order your products online?</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
          </div>
          <div className="col-lg-6 col-12">
            <h4>~ When are you opening a shop near me?</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="baked mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="item d-flex flex-lg-row flex-column gap-3 align-items-lg-center align-items-start">
              <h4 className="text-lg-center text-start">
                Baked fresh daily by bakers with passion.
              </h4>
              <CustomButton text={"Learn More"} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="titleform">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
          </div>
        </div>

        <BasicForm/>

      </div>
    </section>
    <section className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 footer-social">
            <a href="#">Register</a>
            <a href="#">Forum</a>
            <a href="#">Affiliate</a>
            <a href="#">FAQ</a>
          </div>
          </div>
            <div class="social-icons">
              <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.youtube.com/c/your_channel" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube"></i>
              </a>
              <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <h6>© 2021. Foodera. All rights reserved.</h6>
          </div>
    </section>
    </>
  )
}

export default Home;