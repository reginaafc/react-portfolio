import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";


function Work(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <Projects></Projects>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default Work;
