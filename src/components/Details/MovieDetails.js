import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/movies/${id}`)
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
        <p>loading</p>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 text-center details-poster">
            <img
              src={movies.poster_path}
              alt={movies.title}
              width="200"
              height="200"
            />
          </div>
          <div className="col">
            <h3>{movies.title}</h3>
            <div className="row">
              <div className="col">
                <h6>{movies.genre_ids.join(" | ")}</h6>
              </div>
              <div className="col">
                <p>{movies.release_date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
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
              <button type="button" className="btn btn-outline-info mx-3">
                Rent
              </button>
              <button type="button" className="btn btn-outline-info mx-3">
                Buy
              </button>
            </div>
          </div>
          <div className="col">
            <img
              className="details-backdrop"
              src={movies.backdrop_path}
              alt={movies.title}
              width="600"
              height="500"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
