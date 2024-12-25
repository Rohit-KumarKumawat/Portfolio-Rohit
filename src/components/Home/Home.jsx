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
        <p className="Stack stack1">Aspiring Full Stack Developer</p>
        <p className="thought">
          I am very excited to develop new ideas and things.
        </p>
        <Button
          className="btn-home"
<<<<<<< HEAD
          onClick={() => window.open("/images/Rohit-Resumefinal.pdf", "_blank")}
=======
          onClick={() => window.open("/images/Rohit Kumar Kumawat.pdf", "_blank")}
>>>>>>> 5026231188395c6c1549570a9da076590434d37a
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
      <div className="homecard2">
        <img src="/images/myimage.jpeg" alt="" className="image" height="1%" />
      </div>
    </div>
  );
};

export default Home;
