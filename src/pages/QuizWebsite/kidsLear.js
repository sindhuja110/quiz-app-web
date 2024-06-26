import React from "react";
import Birds from "../../assets/images/Maths.webp";
import Animals from "../../assets/images/Maths.webp";
import Sounds from "../../assets/images/Maths.webp";
import { Col, Container, Row } from "react-bootstrap";

const Kidslearn = () => {
  return (
    <div className="header">
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
              <Col lg={4} className="mb-4">
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
                  <img src={Birds} alt="Birds" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Sounds of Animals & Birds</p>
              </Col>
              <Col lg={4} className="mb-4">
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
                  <img src={Animals} alt="Animals" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Vision of Animals & Birds</p>
              </Col>
              <Col lg={4} className="mb-4">
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
                  <img src={Sounds} alt="Sounds" style={{ width: '60%' }} />
                </div>
                <p className="mt-3">Math</p>
              </Col>
              </Row>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Kidslearn;
