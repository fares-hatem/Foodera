import React from "react";
import './Navs.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomButton from "../../CustomButton/CustomButton";


const Navs = () => {
  return (
    <Navbar expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
        <img className="logo" src="https://demo.tutsflow.com/foodera/images/logo.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fw-bold">
          <Nav.Link className="nav-link-item" href="#">Home</Nav.Link>
          <Nav.Link className="nav-link-item" href="#">About Us</Nav.Link>
          <Nav.Link className="nav-link-item" href="#">Explore Foods</Nav.Link>
          <Nav.Link className="nav-link-item" href="#">Reviews</Nav.Link>
          <Nav.Link className="nav-link-item" href="#">FAQ</Nav.Link>
        </Nav>
        <CustomButton text="1800 789 123" link="#" type="link" />
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}
export default Navs;
