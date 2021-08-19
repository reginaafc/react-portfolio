import React from "react";
import "../assets/css/Info.css";
import Me from "./img/EF2DC72A-8090-41FB-87F4-0BE098F0D9F8.jpg";


function Info(props) {
  return (
    <section className="info-container mb-8">
      <div class="row">
        <div class="col-3">
          <p>
            <img className="teamOutlined" src={Me}/>
          </p>
        </div>
        <div class="col-8">
          <div class="row-8 about-b">About Me</div>
          <div class="row-8 info-i m-4">
            Hello! My name is Regina Franco, I'm 17 years old and I'm a high
            school student. I want to study systems engineering to become a
            professional programmer. I have a diverse set of skills, ranging
            from design, to HTML + CSS + Javascript, Python and Swift.
          </div>
          <div class="row-8 m-6">
            <a href="https://github.com/reginaafc" className="buttooon p-2 m-2 text-2xl"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/regina-franco-5a4807207/"  className="buttooon p-2 m-2 text-2xl"><i class="fab fa-linkedin"></i></a>
            <a href="tel:5573173475" className="buttooon p-2 m-2 text-2xl"><i class="fas fa-phone-alt"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
