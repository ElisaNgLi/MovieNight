import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/movie-logo.png";

const Header = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [title, setTitle] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(true);
    let searchTitle = [];
    if (title !== "") {
      let searchTitleArray = [];
      const value = title.toLowerCase();
      searchTitle = data.filter((entry) => {
        return entry.title.toString().toLowerCase().search(value);
      });
    }
  };

  const handleTitleChange = (titles) => {
    setTitle(titles.target.value);
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5001/tv/title?title=${title}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTv(data.body);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       console.log(err.message);
  //     });
  // });

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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tv">
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/account"
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
          <form className="d-flex" onSubmit={handleSearch}>
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
  );
};

export default Header;
