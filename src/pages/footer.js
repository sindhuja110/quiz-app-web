// src/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={3} className="footer-section">
                        <img src="socrative-logo.png" alt="Socrative Logo" className="logo" />
                        <p>© Copyright 2024 Showbie Inc. All rights reserved.</p>
                        <p>Socrative is a product of <strong>Showbie Inc.</strong></p>
                    </Col>
                    <Col md={2} className="footer-section border-right">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">about us</a></li>
                            <li><a href="#privacy">privacy policy</a></li>
                            <li><a href="#terms">terms & conditions of service</a></li>
                            <li><a href="#accessibility">accessibility declaration</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className="footer-section border-right">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#support">support</a></li>
                            <li><a href="#pilots">pilots</a></li>
                            <li><a href="#resellers">resellers</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className="footer-section border-right">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li><a href="#contact">contact us</a></li>
                            <li><a href="#feature">request a feature</a></li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                        </div>
                    </Col>
                    <Col md={3} className="footer-section last-section">
                        <Button variant="outline-light" className="app-button">Get the app</Button>
                        <Button variant="outline-light" className="pro-button">Upgrade to PRO</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
