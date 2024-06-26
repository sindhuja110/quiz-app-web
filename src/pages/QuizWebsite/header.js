import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/companylogo.png';

const AppBarHeader = () => {
  return (
    <div className="app-bar-header">
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Driftmark Technology logo"
            />
            <span className="ml-0">Driftmark Technology</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="https://play.google.com" className="download-link">
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBarHeader;
