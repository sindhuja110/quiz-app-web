// src/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logoimage from '../../assets/images/companylogo.png';

const Footer = () => {
    return (
        <footer className="footer d-flex flex-row justfy-content-between">
            <Container>
                <Row className='d-flex flex-row justfy-content-center align-items-center'>
                    <Col md={3} className="footer-section border-right text-center">
                        <img src={logoimage} alt="Driftmark Logo" className="logo" />
                        <p><strong>Driftmark Technology</strong></p>
                        <p>© Copyright 2024 Driftmark Technology. All rights reserved.</p>
                    </Col>
                    <Col md={2} className="footer-section border-right ">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="https://driftmarktechnology.com/about" target='blank'>about us</a></li>
                            <li><a href="https://driftmarktechnology.com/privacy-policy" target='blank'>privacy policy</a></li>
                            <li><a href="https://driftmarktechnology.com/terms" target='blank'>terms & conditions</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className="footer-section border-right">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#support">support</a></li>
                            <li><a href="/faq">FAQ</a></li>
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
                            <a href="https://api.whatsapp.com/send/?phone=916381475573&text&type=phone_number&app_absent=0" target='blank'><i className="fab fa-whatsapp outline-light"></i></a>
                            <a href="mailto:driftmarktechnology@gmail.com"><i className="fas fa-envelope outline-light"></i></a>
                        </div>
                    </Col>
                    <Col md={2} className="footer-section last-section">
                        <Button variant="outline-light" className="app-button">Get the app</Button><br/>
                        <Button variant="outline-light" className="pro-button">Upgrade to PRO</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
