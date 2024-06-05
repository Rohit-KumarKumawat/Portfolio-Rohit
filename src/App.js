import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import video from "./../src/components/Home/back-video.mp4";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <video src={video} autoPlay muted loop className="back-video"></video>
        <Navbar />
        <div id="home" style={{ paddingTop: "2%" }}>
          <Home />
        </div>
        <div id="about" style={{ paddingTop: "7%" }}>
          <About />
        </div>
        <div id="project" className="Project11" style={{ paddingTop: "5%" }}>
          <Project />
        </div>
        <div id="contact" style={{ paddingTop: "7%" }}>
          <Contact />
        </div>
        <div id="footer" style={{ paddingTop: "16%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
