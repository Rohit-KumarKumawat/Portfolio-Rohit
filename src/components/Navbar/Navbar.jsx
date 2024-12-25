import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const NavBar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#" onClick={() => handleScroll("home")}>
          RS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-margin">
            <Nav.Link
              className="navbar-link"
              href="#"
              onClick={() => handleScroll("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              href="#"
              onClick={() => handleScroll("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              href="#"
              onClick={() => handleScroll("project")}
            >
              Project
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              href="#"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
