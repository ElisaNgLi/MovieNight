import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/movie-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Movie Night" />
        </NavLink>
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
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Free
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Movie Night
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/login">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/forgotpassword">
                    Forgot Password
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/registration">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-dark">
    //   <div className="container-fluid">
    //     <NavLink className="navbar-brand" to="/">
    //       <img src={logo} alt="Movie Night" />
    //     </NavLink>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink id="head-link" className="nav-link" to="/">
    //             Movies
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink id="head-link" className="nav-link" to="/">
    //             TV Shows
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink id="head-link" className="nav-link" to="/">
    //             Free
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink id="head-link" className="nav-link" to="/">
    //             My Movie Night
    //           </NavLink>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink id="head-link" className="nav-link" to="/login">
    //             Log In
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink id="head-link" className="nav-link" to="/registration">
    //             Sign Up
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
