import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import playstore from "../../assets/images/play-store-badge-.webp";
import HomeImage from "../../assets/images/mainimage.jpg";

const Maincontent = () => {
  return (
    <div className="bg-custom">
      <Container>
        <Row>
          <Col xs={12} lg={6} className="text-center mt-5 ">
            <h1
              className="mb-4 animated zoomIn mt-5"
              style={{ fontSize: "45px" }}
            >
              Fun Learning
              <br /> Made Easy
            </h1>
            <p className="pb-3 animated zoomIn" style={{ fontSize: "20px" }}>
              "Discover a fun way to learn with our quiz app for kids. <br />
              Answer questions, earn rewards, and have lots of fun!"
            </p>
            <a
              href="https://play.google.com/store/apps/details?id="
              target="blank"
            >
              <img
                src={playstore}
                alt="Quiz Time App Google Play"
                title="Quiz Time App Google Play"
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-start">
            <Image
              fluid
              style={{ height: "auto", width: "auto" }}
              src={HomeImage}
              alt="App preview"
              className="animated zoomIn"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Maincontent;
