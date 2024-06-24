import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';  // Import download icon
import logo from '../Assets/companylogo.png';  // Import your logo


const AppBarHeader = () => {
  return (
    <div className="app-bar-header">
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Khan Academy Kids logo"
            />
            <span className="ml-2">Khan Academy Kids</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#donate">Donate</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="https://play.google.com" className="download-link">
                <Button variant="outline-light">
                  <FaDownload /> Download the App
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBarHeader;
