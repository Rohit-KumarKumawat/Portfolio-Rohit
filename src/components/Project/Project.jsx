import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import projects from "./projectData";
import "./Project.css";

const Project = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null); // Add state for tracking current project index

  const handleShowDetails = (index) => {
    setShowDetails(true);
    setCurrentProjectIndex(index); // Set current project index when showing details
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setCurrentProjectIndex(null); // Reset current project index when closing details
  };

  const handleShowDemo = (index) => {
    setShowDemo(true);
    setCurrentProjectIndex(index); // Set current project index when showing demo
  };

  const handleCloseDemo = () => {
    setShowDemo(false);
    setCurrentProjectIndex(null); // Reset current project index when closing demo
  };

  return (
    <Container className="mt-5">
      <h1 className="project-heading">My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card className="project-card1">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>
                <Button
                  variant="primary"
                  className="mb-2 w-100"
                  onClick={() => handleShowDetails(index)}
                >
                  View Details
                </Button>
                <Button
                  variant="secondary"
                  className="mb-2 w-100"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  GitHub
                </Button>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => handleShowDemo(index)}
                >
                  View Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button
        className="p-btn w-100"
        variant="secondary"
        href="https://github.com/Rohit-KumarKumawat?tab=repositories"
        target="__blank"
        // style={{
        //   width: "100%",
        //   background: "transparent",
        // }}
      >
        View More Projects...
      </Button>
      {/* Modal for project details */}
      <Modal show={showDetails} onHide={handleCloseDetails}>
        {currentProjectIndex !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{projects[currentProjectIndex].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{projects[currentProjectIndex].details}</p>
              <p>
                Technologies:{" "}
                {projects[currentProjectIndex].technologies.join(", ")}
              </p>
              <p>Key Contribution Points:</p>
              <ul>
                {projects[currentProjectIndex].contributionPoints.map(
                  (point, index) => (
                    <li key={index}>{point}</li>
                  )
                )}
              </ul>
              <p>
                GitHub Repository:{" "}
                <a href={projects[currentProjectIndex].githubLink}>Link</a>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDetails}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Modal for demo video */}
      <Modal show={showDemo} onHide={handleCloseDemo}>
        {currentProjectIndex !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                {projects[currentProjectIndex].title} Demo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <video width="100%" controls>
                <source
                  src={projects[currentProjectIndex].demoVideo}
                  type="video/mp4"
                />
              </video>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDemo}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Project;
