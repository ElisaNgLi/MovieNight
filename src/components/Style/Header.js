import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Movie Night
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a id="head-link" className="nav-link" href="/">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a id="head-link" className="nav-link" href="/">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a id="head-link" className="nav-link" href="/">
                Free
              </a>
            </li>
            <li className="nav-item">
              <a id="head-link" className="nav-link" href="/">
                My Movie Night
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a id="head-link" className="nav-link" href="/">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a id="head-link" className="nav-link" href="/">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
