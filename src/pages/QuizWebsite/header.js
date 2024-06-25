import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../Assets/companylogo.png';  // Import your logo

const AppBarHeader = () => {
  return (
    <div className="app-bar-header">
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
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
              <Nav.Link href="#AboutUs">About Us</Nav.Link>
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
