import React from 'react';
import './navbar.css';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id='top'>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          My Portfolio
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
