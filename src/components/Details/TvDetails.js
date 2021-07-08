import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "./Details.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [tv, setTv] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/tv/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTv(data);
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
        <p>loading tv details</p>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 text-center">
            <img src={tv.poster_path} alt={tv.name} width="200" height="200" />
          </div>
          <div className="col-lg">
            <h3>{tv.name}</h3>
            <div className="row">
              <div className="col">
                <h6>{tv.genre_ids.join(" | ")}</h6>
              </div>
              <div className="col">
                <p>{tv.first_air_date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <ReactStars
                  count={10}
                  size={20}
                  isHalf={true}
                  edit={false}
                  value={tv.vote_average}
                  activeColor="#ffd700"
                />
              </div>
              <div className="col">
                <p>{tv.vote_average}</p>
              </div>
            </div>

            <p>{tv.overview}</p>
            <div className="text-center my-3">
              <button type="button" className="btn btn-outline-info mx-3">
                Rent $3.99
              </button>
              <button type="button" className="btn btn-outline-info mx-3">
                Buy $14.99
              </button>
            </div>
          </div>
          <div className="col-lg details-backdrop text-center">
            <img className="poster" src={tv.backdrop_path} alt={tv.name} />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
