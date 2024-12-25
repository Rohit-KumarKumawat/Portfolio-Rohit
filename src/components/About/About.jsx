import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./About.css";
const About = () => {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);
  return (
    <div>
      <div className="a-container">
        <h1 className="paragh">About Me😊</h1>

        <div className="about-content">
          <p>
            Hello! I'm Rohit Kumar Kumawat, a passionate full-stack developer
            based in Jaipur, Rajasthan. Currently pursuing a Bachelor of
            Technology in Computer Science at the Global Institute of
            Technology, I am dedicated to creating visually appealing and
            user-friendly web applications.
          </p>
          <p>
            My journey in web development is driven by a love for technology and
            design, and a commitment to continuous learning. I thrive in
            collaborative environments and enjoy working with like-minded
            professionals to bring innovative ideas to life.{" "}
          </p>
          <p>
            Outside of my academic and professional pursuits, I enjoy exploring
            new technologies, contributing to open-source projects, and spending
            time outdoors. I am excited about the opportunities ahead and look
            forward to making a significant impact in the IT industry.
          </p>
        </div>
        <button
          className="button1"
          onClick={() => window.open("/images/Rohit-Resumefinal.pdf", "_blank")}
        >
          Resume
        </button>

        <div className="line"></div>
        <div className="skill">
          <h1>My Skills are--</h1>
          <span>
            <img src="/images/html.png" alt="" />
          </span>
          <span>
            <img src="/images/css.png" alt="" />
          </span>
          <span>
            <img src="/images/js.png" alt="" />
          </span>
          <span>
            <img src="/images/reactjs.png" alt="" />
          </span>
          <span>
            <img src="/images/bootstrap.png" alt="" />
          </span>
          <span>
            <img src="/images/github.png" alt="" />
          </span>
          <span>
            <img src="/images/vscode.png" alt="" />
          </span>
          <span>
            <img src="/images/nodejs.png" alt="" />
          </span>
          <span>
            <img src="/images/mongodb.png" alt="" />
          </span>
          <span>
            <img src="/images/cpp.png" alt="" />
          </span>
          <span>
            <img src="/images/mysql.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
