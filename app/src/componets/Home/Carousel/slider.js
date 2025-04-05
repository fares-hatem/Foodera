import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <h2 className="title">Testimonials</h2>
    <div className="testimonial-slider">
      <Carousel indicators={true} controls={false}>
        <Carousel.Item key={1}> {/* ✅ أضف Key لكل عنصر */}
          <div className="testimonial-item">
            <img src={img1} alt="User 1" className="profile-pic" />
            <p className="testimonial-text">
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."
            </p>
            <span className="testimonial-name">Simab Dave - Web Designer</span>
          </div>
        </Carousel.Item>

        <Carousel.Item key={2}>
          <div className="testimonial-item">
            <img src={img2} alt="User 2" className="profile-pic" />
            <p className="testimonial-text mb-3">
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they live."
            </p>
            <span className="testimonial-name2">Johnthan Doe - UX Designer</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);
};

export default Slider;
