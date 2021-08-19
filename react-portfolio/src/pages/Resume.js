import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Resumec from "../components/Resumec";


function Resume(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <Resumec></Resumec>

        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default Resume;
