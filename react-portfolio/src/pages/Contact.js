import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactform from "../components/ContactForm";


function Contact(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <Contactform></Contactform>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default Contact;
