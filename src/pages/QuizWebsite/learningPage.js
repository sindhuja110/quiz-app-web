import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainimage from "../../assets/images/Maths.webp";

const LearningPage = () => {
  return (
    <div>
      <Container className="learn-page">
        <Row className="text-center my-5">
          <Col>
            <h1>Turn Screen Time To Learning Time</h1>
            <p>
              Quiz Time delivers playful learning across Nursery, LKG and UKG
              subjects, building skills 2-6 year olds need for a rock solid
              foundation at the start of their learning journey.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={6}>
            <div
              style={{
                backgroundColor: "white",
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "0 auto",
              }}
            >
              <img src={mainimage} alt="mainimage" style={{ width: "60%" }} />
            </div>

            <h4 className="m-3">Sounds & Vision Skills</h4>
            <p>
              Track your child’s Sounds, Hearing and Vision progress with our
              level based Phonics and Tracing activities.
            </p>
          </Col>
          <Col md={6}>
            <div
              style={{
                backgroundColor: "white",
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "0 auto",
              }}
            >
              <img src={mainimage} alt="mainimage" style={{ width: "60%" }} />
            </div>

            <h4 className="m-3">Number Sense</h4>
            <p>
              Crucial early math concepts made easy through engaging stories,
              rhymes and games.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={6}>
            <div
              style={{
                backgroundColor: "white",
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "0 auto",
              }}
            >
              <img src={mainimage} alt="mainimage" style={{ width: "60%" }} />
            </div>

            <h4 className="m-3">Thinking Skills</h4>
            <p>
              Nourish your child’s never ending curiosity with our wide range of
              fun, interactive on study.
            </p>
          </Col>
          <Col md={6}>
            <div
              style={{
                backgroundColor: "white",
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "0 auto",
              }}
            >
              <img src={mainimage} alt="mainimage" style={{ width: "60%" }} />
            </div>
            <h4 className="m-3">Improve Knowledge</h4>
            <p>
              Our habit building series teach essential life skills that kids
              (and parents) are proud of.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LearningPage;
