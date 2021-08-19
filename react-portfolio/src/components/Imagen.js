import React from "react";
import "../assets/css/Imagen.css";
import Code1 from "./img/photo-1587620962725-abab7fe55159.jpg"
import Code2 from "./img/5u2lug9m32f41.png"
import Code3 from "./img/336-3369055_software-development.jpg"

function Imagen(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 h-40"
            src= {Code1}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img 
          className="d-block w-100" 
          src= {Code2}
          alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img 
          className="d-block w-100" 
          src= {Code3}
          alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Imagen;
