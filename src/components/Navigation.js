import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import logo from "../assets/images/logo5.png";

function Navigation() {
  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: 'transparent' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <Row className="align-items-center">
            <Col>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="TrainsOnWheel Logo"
                style={{objectFit: "contain"}}
              />
            </Col>
          </Row>
        </Navbar.Brand>
        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu Items */}
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Nav.Link href="#home">Menu 1</Nav.Link>
            <Nav.Link href="#link">Menu 2</Nav.Link>
            <Nav.Link href="#link">Menu 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
