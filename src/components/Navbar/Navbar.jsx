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

// import React, { useState } from "react";

// import "./Navbar.css";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);
//   const toggleActive = () => {
//     setIsActive(!isActive);
//   };
//   const removeActive = () => {
//     setIsActive(false);
//   };
//   return (
//     <nav>
//       <nav className="navbar">
//         <div className="logo">
//           <span>R</span>
//           <span>S</span>
//         </div>
//         <ul className="nav-menu">
//           <li onClick={removeActive}>
//             <Link to="/" className="menu-items">
//               Home
//             </Link>
//           </li>
//           <li onClick={removeActive}>
//             <Link to="/About" className="menu-items">
//               About
//             </Link>
//           </li>
//           <li onClick={removeActive}>
//             <Link to="/Project" className="menu-items">
//               Project
//             </Link>
//           </li>
//           <li onClick={removeActive}>
//             <Link to="/Contact" className="menu-items">
//               Contacts
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </nav>
//   );
// };
// export default Navbar;
