import React from "react";
import "../assets/css/Navbar.css";
import {LaptopOutlined } from "@ant-design/icons";
import {PrinterOutlined} from "@ant-design/icons";
import {PhoneOutlined} from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons";



function Navbar(props) {
  return (
    <ul className="header">
      <h1 className="tituloHeader">Regina Franco</h1>
      <div>
      <a href="/" className="buttonn"><UserOutlined /></a>
      <a href="/work" className="buttonn"><LaptopOutlined /></a>
      <a href="/resume" className="buttonn"><PrinterOutlined /></a>
      <a href="/contact" className="buttonn"><PhoneOutlined /></a>
      </div>
    </ul>
  );
}


export default Navbar;
