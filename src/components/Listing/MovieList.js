import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Title from "../Style/Title";

const MovieList = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="container my-5 mx-5">
        <h1 className="text-center">Loading Movies...</h1>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <Title name="Movies" />
        <div className="row text-center mb-4 mt-3">
          <div className="col">
            <button type="button" className="btn btn-outline-info">
              Most Watched
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info">
              Release Date
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info">
              Sort by Name
            </button>
          </div>
        </div>
        <div className="row">
          {movies.map((data) => (
            <div className="col-md my-2 text-center" key={data.id}>
              <Link to={`/movies/${data.id}`}>
                <img
                  className="mx-2"
                  src={data.poster_path}
                  alt={data.title}
                  width="200"
                  height="200"
                />
              </Link>
              <h5 className="mt-2">{data.title}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MovieList;
