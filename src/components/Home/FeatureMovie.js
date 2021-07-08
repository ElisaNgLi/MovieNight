import React, { useEffect, useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

import SubTitle from "../Style/SubTitle";

const FeatureMovie = () => {
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

  const random = (max, movies) => {
    let result = [];
    let counter = 0;

    while (counter < max) {
      let rand = movies[Math.floor(Math.random() * movies.length)];
      if (!result.some((an) => an === rand)) {
        result.push(rand);
        counter++;
      }
    }
    return result;
  };

  if (isLoading) {
    return (
      <div className="container">
        <p>isLoading...</p>
      </div>
    );
  } else {
    return (
      <div className="container my-3">
        <SubTitle name="Feature Movies" />
        <ScrollMenu
          arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
          arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
          data={random(
            6,
            movies.map((data, index) => (
              <img
                className="mx-2"
                key={index.toString()}
                src={data.poster_path}
                alt={data.title}
                width="200"
                height="200"
              />
            ))
          )}
        />
      </div>
    );
  }
};

export default FeatureMovie;
