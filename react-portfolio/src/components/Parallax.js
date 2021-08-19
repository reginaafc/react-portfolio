import React from "react";
import "../assets/css/Parallax.css";
import Img4 from "./img/1_MCn1VrXQznTi3JMtAIGK0g.jpg"


function Parallax(props) {
  return (
    <div
      className="parallax-img"
      style={{
        backgroundImage: `url("${Img4}")`,
      }}
    ></div>
  );
}

export default Parallax;
