import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "./Details.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //if trying with local change the link back to http://localhost:8000/movies
    fetch(`https://night-movie.herokuapp.com/movies/${id}`)
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
  }, [id]);

  if (isLoading) {
    return (
      <div className="container">
        <p>loading movie details</p>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 text-center">
            <img
              src={movies.poster_path}
              alt={movies.title}
              width="200"
              height="200"
            />
          </div>
          <div className="col-lg">
            <h3>{movies.title}</h3>
            <div className="row">
              <div className="col-lg">
                <h6>{movies.genre_ids.join(" | ")}</h6>
              </div>
              <div className="col-lg">
                <p>{movies.release_date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <ReactStars
                  count={10}
                  size={20}
                  isHalf={true}
                  edit={false}
                  value={movies.vote_average}
                  activeColor="#ffd700"
                />
              </div>
              <div className="col">
                <p>{movies.vote_average}</p>
              </div>
            </div>

            <p>{movies.overview}</p>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn btn-outline-info mx-3"
                onClick={() => alert("Rent Click")}
              >
                Rent $3.99
              </button>
              <button
                type="button"
                className="btn btn-outline-info mx-3"
                onClick={() => alert("Buy Click")}
              >
                Buy $14.99
              </button>
            </div>
          </div>
          <div className="col-lg details-backdrop text-center">
            <img
              className="poster"
              src={movies.backdrop_path}
              alt={movies.title}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
