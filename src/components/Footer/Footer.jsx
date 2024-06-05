import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p className="footer-text">
          © 2024 All rights reserved by Rohit Kumawat.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
