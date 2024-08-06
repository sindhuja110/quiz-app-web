import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chooseimage from "../../assets/images/companylogo.png";

const WhyChooseOurs = () => {
  return (
    <div>
      <Container className="mt-5 mb-5 choose-page">
        <Row>
          <Col xs={12} xl={6} sm={12} xxl={6} md={6} lg={6}>
            <img
              alt="main iname"
              class="img-fluid animated zoomIn justify-content-end align-items-end"
              data-wow-delay="0.5s"
              src={Chooseimage}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="fade-in-up text-center"
            data-wow-delay="0.1s "
          >
            <div className="mb-4 pb-2">
              <h2 className="mt-2 mt-4 ">
                <br />
                Why Choose Us
              </h2>
            </div>
            <p className="mb-4" style={{ fontSize: "20px" }}>
              <b>QuizKid:</b> "Fun and Learning Combined - Engage your children
              with exciting quiz games that make learning enjoyable. Track their
              progress, earn badges, and discover a world of knowledge through
              our user-friendly app designed specifically for kids."
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseOurs;
