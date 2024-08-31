import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";

function BrandExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./assets/airbnb-logo.png"
              className="d-inline-block align-top"
              alt="Airbnb logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
