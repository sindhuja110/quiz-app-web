import React from "react";
import Maths from "../Assets/Maths.webp";
import Phonsonic from "../Assets/Phonesonic.svg";
import Voculbulary from "../Assets/Vocubulary.svg";
import Sightword from "../Assets/Sightwords.svg";
import { Col, Container, Row } from "react-bootstrap";

const Kidslearn = () => {
  return (
    <>
      <Container className="mt-4 mb-4 d-flex justify-content-center">
        <Col xs={12} md={12} sm={12} className="mt-5">
          <div
            style={{
              height: "auto",
              width: "100%",
              textAlign: "center",
              margin: "0 auto",
              borderRadius: "10px",
              padding: "55px",
              backgroundColor: "#F8F8F9",
            }}
          >
            <h1>What Kids Will Learn</h1>
            <Row className="mt-5">
              <Col lg={3} className="mb-4">
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
                  <img src={Maths} alt="Maths" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Logical Thinking</p>
              </Col>
              <Col lg={3} className="mb-4">
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
                  <img src={Phonsonic} alt="Phonsonic" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Phonetics</p>
              </Col>
              <Col lg={3} className="mb-4">
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
                  <img src={Voculbulary} alt="Vocabulary" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Vocabulary</p>
              </Col>
              <Col lg={3} className="mb-4">
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
                  <img src={Sightword} alt="Sight Words" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Sight Words</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default Kidslearn;