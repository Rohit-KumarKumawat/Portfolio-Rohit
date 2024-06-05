import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons package
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css"; // Import the custom CSS file

const Contact = () => {
  return (
    <Container className="mt-5 contact-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="contact-card">
            <Card.Header className="text-center contact-header">
              <h2>Contact Me</h2>
            </Card.Header>
            <Card.Body className="card-body-c">
              <ListGroup className="list-group-flush">
                <ListGroupItem className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <span className="info">rohitkumarkumawat22@gmail.com</span>
                </ListGroupItem>
                <ListGroupItem className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <span className="info">+91 8306462630</span>
                </ListGroupItem>
                <ListGroupItem className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <span className="info">Sikar, Rajasthan, India</span>
                </ListGroupItem>
                <ListGroupItem className="contact-item">
                  <ListGroupItem className="contact-item">
                    <FaLinkedin
                      size={30}
                      className="mr-3 clickable-icon"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/rohit-kumawat-a9a075232/",
                          "_blank"
                        )
                      }
                    />
                    <span></span>
                  </ListGroupItem>
                  <ListGroupItem className="contact-item">
                    <FaGithub
                      size={30}
                      className="mr-3 clickable-icon"
                      onClick={() =>
                        window.open(
                          "https://github.com/Rohit-KumarKumawat",
                          "_blank"
                        )
                      }
                    />
                    <span></span>
                  </ListGroupItem>
                  <ListGroupItem className="contact-item">
                    <FaEnvelope
                      size={30}
                      className="mr-3 clickable-icon"
                      onClick={() =>
                        (window.location.href =
                          "mailto:rohitkumarkumawat22@gmail.com")
                      }
                    />
                    <span></span>
                  </ListGroupItem>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
