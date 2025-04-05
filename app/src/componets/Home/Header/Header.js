import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../CustomButton/CustomButton';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h2>Good food choices are good investments.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <div className="btn-group">
            <CustomButton className="btn order">Order Now <span className="fa fa-shopping-basket"></span></CustomButton>
              <CustomButton className="btn" text="Learn More"><i className="fa-solid fa-angle-right ms-2"></i></CustomButton>
            </div>
          </div>
          <div className="col-md-6">
          <img src="../../../../public/img_1.jpg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
