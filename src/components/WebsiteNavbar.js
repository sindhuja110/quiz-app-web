import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo3 from "../assets/images/Trainonwheelslogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(faBars);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setToggleIcon(isCollapsed ? faTimes : faBars);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className="shadow navcustom"
    >
      <div className="container">
        {/* Begin Logo */}
        <Navbar.Brand href="#">
          <img
            src={Logo3}
            alt="TrainsOnWheels"
            className="img-fluid"
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </Navbar.Brand>
        {/* End Logo */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav responsive-navbar-nav"
          onClick={handleToggleCollapse}
          style={{ marginRight: "15px", color: "white" }}
        >
          <FontAwesomeIcon icon={toggleIcon} style={{ color: "white" }} />
        </Navbar.Toggle>
        {/* Begin Menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className="custom-navbar-collapse">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/pnr-status">PNR Status</Nav.Link>
            <Nav.Link as={Link} to="/coach-position">Coach Position</Nav.Link>
            <Nav.Link as={Link} to="/live-train">Live Train</Nav.Link>
            <Nav.Link as={Link} to="/advertisement">Advertisement</Nav.Link>
            <NavDropdown title="More Features" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/fare">Fare Calculator</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fare-comparison">Fare Comparison</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seat-availability">Seat Availability</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* End Menu */}
      </div>
    </Navbar>
  );
}

export default Header;
