import React, { useEffect, useState } from "react";
import "./projects.css";
import Fliplink from "./img/fliplink.png";
import Autoshortai from "./img/autooshortai.png";
import TV1 from "./img/TV1.png";
import TV2 from "./img/TV2.png";
import TV3 from "./img/TV3.png";
import DD from "./img/DD.png";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Projects = () => {

  // const [showRow, setShowRow] = useState(false);

  // const toggleRowVisibility = () => {
  //   setShowRow(!showRow);
  // };

  useEffect(() => {
    // Select all tab buttons and content panels
    const buttons = document.querySelectorAll(".mark_names");
    const contentPanels = document.querySelectorAll(".content-panel");
    const underlines = document.querySelectorAll(".border-bottom-style");

    // Function to handle tab switching
    const handleTabClick = (index) => {
      // Remove 'active' class from all buttons, panels, and underlines
      buttons.forEach((btn) => btn.classList.remove("active"));
      contentPanels.forEach((panel) => panel.classList.remove("active"));
      underlines.forEach((line) => line.classList.remove("active"));

      // Add 'active' class to clicked button, corresponding panel, and underline
      buttons[index].classList.add("active");
      contentPanels[index].classList.add("active");
      underlines[index].classList.add("active");
    };

    // Add click event listener to each button
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => handleTabClick(index));
    });

    // Set default active state (first tab)
    handleTabClick(0);

    // Clean up event listeners when component unmounts
    return () => {
      buttons.forEach((button, index) =>
        button.removeEventListener("click", () => handleTabClick(index))
      );
    };
  }, []);

  return (
    <div id="projects" className="projects center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2 className="text-center">Here is My Works </h2>
          </div>
          <div className="col-md-12 col-12">
            <div className="project_types">
              <ul>
                <li className="project_types_name" role="presentation">
                  <button className="mark_names">
                    <span>UI CLONE / DESIGNS</span>
                  </button>
                  <span className="border-bottom-style"></span>
                </li>
                <li className="project_types_name" role="presentation">
                  <button className="mark_names">
                    <span>Frontend Develop</span>
                  </button>
                  <span className="border-bottom-style"></span>
                </li>
                <li className="project_types_name" role="presentation">
                  <button className="mark_names">
                    <span>React Design</span>
                  </button>
                  <span className="border-bottom-style"></span>
                </li>
                <li className="project_types_name" role="presentation">
                  <button className="mark_names">
                    <span>React Native</span>
                  </button>
                  <span className="border-bottom-style"></span>
                </li>
              </ul>
            </div>
            <div className="project_content">
              <div className="content-panel">
                <p className="short-desc">
                  Recreated <span className="project-number">5+</span> website designs (e.g., AutoShortsAI, FlipLink, FlipZign, BlackFriday) as pixel-perfect clones based on project requirements.
                </p>
                {/* <button className="see_projects" onClick={toggleRowVisibility}>See projects</button> */}
                {/* {`project_main_div ${showRow ? 'show' : 'hide'}`} */}
                <div className='row project_main_div'>
                  <div className="col-md-4 col-12 p-0">
                    <div className="project_show mt-3 mt-md-0">
                      <div className="project-heading">
                        <span>Project 1</span>
                      </div>
                      <div className="project-content">
                        <span className="tool-edit">Description</span>
                        <h3>Cloned FlipLink's landing page with a modern, responsive design.</h3>
                        <span className="tool-edit">Tools Used</span>
                        <p>HTML, CSS, JS.</p>
                        <span className="tool-edit">Img Preview</span>
                        <img
                          src={Fliplink}
                          alt="preview"
                          className="img-fluid d-block mx-auto img_preview"
                          onClick={() => window.open(Fliplink, '_blank')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 p-0">
                    <div className="project_show mt-3 mt-md-0">
                      <div className="project-heading">
                        <span>Project 2</span>
                      </div>
                      <div className="project-content">
                        <span className="tool-edit">Description</span>
                        <h3>Cloned AutoShortsAI.Focused on replicating the dynamic content and smooth user experience.</h3>
                        <span className="tool-edit">Tools Used</span>
                        <p>HTML, CSS, JS.</p>
                        <span className="tool-edit">Img Preview</span>
                        <img
                          src={Autoshortai}
                          alt="preview"
                          className="img-fluid d-block mx-auto img_preview"
                          onClick={() => window.open(Autoshortai, '_blank')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 p-0">
                    <div className="project_show mt-3 mt-md-0">
                      <div className="project-heading">
                        <span>Project 3</span>
                      </div>
                      <div className="project-content">
                        <span className="tool-edit">Description</span>
                        <h3>Cloned the BlackFriday promotional website with a focus on showcasing product deals and countdown timers. </h3>
                        <span className="tool-edit">Tools Used</span>
                        <p>HTML, CSS, JS.</p>
                        <span className="tool-edit">Live Preview</span>
                        <a target="_blank" href="https://partner.logicbeam.com/black-friday-2024/">Click Here</a>
                        {/* <img
                          src={Fliplink}
                          alt="preview"
                          className="img-fluid d-block mx-auto img_preview"
                          onClick={() => window.open(Fliplink, '_blank')}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-panel">
                <p className="short-desc">
                  Converted <span className="project-number">10+</span> Figma designs into fully responsive websites using HTML, CSS, and JavaScript, ensuring cross-device compatibility.
                </p>
                <div className='row project_main_div'>
                  <div className="col-md-4 offset-md-2 col-12 p-0">
                    <div className="project_show mt-3 mt-md-0">
                      <div className="project-heading">
                        <span>Project 1</span>
                      </div>
                      <div className="project-content">
                        <span className="tool-edit">Description</span>
                        <h3>Converted EduZign's design from Figma into a fully responsive website. Ensured pixel-perfect implementation with smooth layouts across desktop, tablet, and mobile devices. Focused on accessibility, cross-browser compatibility, and seamless user experience.</h3>
                        <span className="tool-edit">Tools Used</span>
                        <p>FIGMA, HTML, CSS, CSS-ANIMATION, JS, BOOTSTRAP, GOOGLE-FONTS, PHOTOSHOP.</p>
                        <span className="tool-edit">Live Preview</span>
                        <a target="_blank" href="https://partners.eduzign.com/">Click Here</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 p-0">
                    <div className="project_show mt-3 mt-md-0">
                      <div className="project-heading">
                        <span>Project 2</span>
                      </div>
                      <div className="project-content">
                        <span className="tool-edit">Description</span>
                        <h3>Translated TVEngager's Figma design into a fully functional and responsive website. Ensured pixel-perfect accuracy, cross-browser compatibility, and seamless responsiveness for desktop, tablet, and mobile devices.</h3>
                        <span className="tool-edit">Tools Used</span>
                        <p>FIGMA, HTML, CSS, CSS-ANIMATION, JS, BOOTSTRAP, GOOGLE-FONTS, PHOTOSHOP.</p>
                        <span className="tool-edit">Img Preview</span>
                        <a target="_blank" href={TV1}>Click Here</a>
                        <a target="_blank" href={TV2}>Click Here</a>
                        <a target="_blank" href={TV3}>Click Here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-panel">
                <p className="short-desc">
                  Built a responsive React project utilizing React Router, React Icons, and Bootstrap, showcasing dynamic navigation and modern UI components.
                </p>
                <h3 className="pink">Hotel Management Website</h3>
                <h3 className="tool-edit">Description</h3>
                <p className="short-desc">Developed a responsive hotel management website using React. The project includes a user-friendly interface with well-structured pages such as Navigation, About, Footer, Content, Login, and Header, ensuring seamless navigation and a cohesive design.</p>
                <h3 className="tool-edit">Key Features</h3>
                <p className="short-desc">1. Implemented React Router for efficient page navigation and dynamic routing.</p>
                <p className="short-desc">2. Built with JSX and modern React practices for clean, reusable components.</p>
                <p className="short-desc">3. Fully responsive design optimized for desktop, tablet, and mobile devices.</p>
                <h3 className="tool-edit">Tool Used</h3>
                <p className="short-desc">React, React Router, JSX, CSS.</p>
                <span className="tool-edit">Img Preview</span>
                <a target="_blank" href={DD}>Click Here</a>
                <span className="tool-edit">Live Preview</span>
                <a target="_blank" href='https://naazafsha.github.io/hotelManagement/'>Click Here</a>
              </div>
              <div className="content-panel">
                <p className="short-desc">
                  Exploring and implementing React Native fundamentals to create cross-platform mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
