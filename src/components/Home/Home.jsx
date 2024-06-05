import React, { useState } from "react";
import "./Home.css";
import { Modal, Button } from "react-bootstrap";
const handleScroll = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  return (
    <div className="h-container">
      <div className="homecard">
        <h1 className="hello">Hello,👋</h1>
        <span className="name">I am </span>
        <span className="name name1">Rohit Kumawat</span>
        <p className="Stack stack1">Front End Developer</p>
        <p className="thought">
          I am very excited to develop new ideas and things.
        </p>
        <Button
          className="btn-home"
          onClick={() => window.open("/images/resume.pdf", "_blank")}
        >
          Resume
        </Button>
        <Button
          className="btn-home btn1"
          onClick={() => handleScroll("contact")}
        >
          Contact me
        </Button>
      </div>
      <div>
        <img src="/images/myimage.png" alt="" className="image" />
      </div>
    </div>
  );
};

export default Home;
