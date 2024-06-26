import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../footer";
import Header from "../header";
import MockTestImage from "../../../assets/images/mainimage.jpg";
import MainTestImage from "../../../assets/images/mainimage.jpg";
import LeaderboardImage from "../../../assets/images/mainimage.jpg";
import BMICalculatorImage from "../../../assets/images/mainimage.jpg";

const KidsQuizAppFeatures = () => {
  return (
    <>
      <Header />
      {/* ----------------About row start---------------- */}
      <div className="feature-row">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h1 style={{ textAlign: "center" }}>Kids Quiz App Features</h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ----------------Mock Test Section---------------- */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 order-lg-1">
            <img
              src={MockTestImage}
              alt="Mock Test"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0 order-lg-2">
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#6B78B7",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Daily Unlimited Mock Tests
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              "Kids can attend daily mock tests on basic math skills like addition, subtraction, multiplication, and division."
            </p>
          </Col>
        </Row>
      </Container>

      {/* ----------------Main Test Section---------------- */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 order-lg-2">
            <img
              src={MainTestImage}
              alt="Main Test"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0 order-lg-1">
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#6B78B7",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Main Test with Rewards
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              "Earn coins and leaderboard positions by answering correctly in our main tests, designed to reinforce basic math skills."
            </p>
          </Col>
        </Row>
      </Container>

      {/* ----------------Leaderboard Section---------------- */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 order-lg-1">
            <img
              src={LeaderboardImage}
              alt="Leaderboard"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0 order-lg-2">
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#6B78B7",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Interactive Leaderboard
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              "See where you stand among peers with our interactive leaderboard, encouraging healthy competition."
            </p>
          </Col>
        </Row>
      </Container>

      {/* ----------------BMI Calculator Section---------------- */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 order-lg-2">
            <img
              src={BMICalculatorImage}
              alt="BMI Calculator"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0 order-lg-1">
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#6B78B7",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              BMI Calculator
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              "Learn about health with our BMI calculator, teaching kids about body mass index in a fun and educational way."
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default KidsQuizAppFeatures;
