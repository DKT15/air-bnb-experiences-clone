import Image from "react-bootstrap/Image";
import "../styles/Hero.css";

function FluidExample() {
  return (
    <div className="hero-wrapper">
      <Image className="hero-img" src="./assets/photo-grid.png" fluid />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default FluidExample;
