import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/movie-logo.png";
import SearchResult from "../Home/SearchResult";

const Header = () => {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState(allData);
  const [search, setSearch] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const url = [
      { url: "http://localhost:5001/tv" },
      { url: "http://localhost:5001/movies" },
    ];
    const fetchStuff = async () => {
      const results = await Promise.all(url.map((type) => fetch(type.url)));
      const results2 = await Promise.all(results.map((res) => res.json()));
      const movies = [results2[0].body];
      const tv = [results2[1].body];
      const combine = movies.concat(tv);
      setAllData(combine);
      setFilterData(combine);
    };
    fetchStuff();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.value.toLowerCase();
    let result = [];
    let all = allData[0].concat(allData[1]);
    result = all.filter((data) => {
      return data.title.toLowerCase().search(value) !== -1;
    });
    setFilterData(result);
    setSearch(true);
    history.push("/search");
    console.log(result);
  };

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
              // value={setValue()}
              onChange={(event) => handleSearch(event)}
            />
            {!search && (
              <div>
                {filterData.map((data, index) => (
                  <SearchResult
                    key={index}
                    title={data.title}
                    poster_path={data.poster_path}
                  />
                ))}
              </div>
            )}
            {/* <button className="btn btn-outline-dark" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
