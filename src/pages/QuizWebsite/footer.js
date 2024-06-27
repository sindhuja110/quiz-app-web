import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logoimage from "../../assets/images/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer d-flex flex-row justify-content-between">
      <Container>
        <Row className="d-flex flex-row justify-content-center align-items-center">
          <Col md={3} className="footer-section border-right text-center">
            <img src={logoimage} alt="Driftmark Logo" className="logo" />
            <p>
              <strong>Driftmark Technology</strong>
            </p>
            <p>© Copyright 2024 Driftmark Technology. All rights reserved.</p>
          </Col>
          <Col md={2} className="footer-section border-right">
            <h4>Company</h4>
            <ul>
              <li>
                <a
                  href="https://driftmarktechnology.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  about us
                </a>
              </li>
              <li>
                <a
                  href="https://driftmarktechnology.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
              </li>
              <li>
                <a
                  href="https://driftmarktechnology.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  terms & conditions
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="footer-section border-right">
            <h4>Quiz App</h4>
            <ul>
              <li>
                <a href="/terms-use">Terms & Use</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="footer-section border-right">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <a href="/contact-us">contact us</a>
              </li>
              <li>
                <a href="/features">Our Feature</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="footer-section last-section">
            <Button variant="outline-light" className="app-button">
              Get the app
            </Button>
            <br />
            <div className="social-icons">
              <a
                href="https://api.whatsapp.com/send/?phone=916381475573&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="fa-icon" />
              </a>
              <a href="mailto:driftmarktechnology@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="fa-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
