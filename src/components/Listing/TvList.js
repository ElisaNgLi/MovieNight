import React, { useState, useEffect } from "react";

import Title from "../Style/Title";

const TvList = () => {
  const [tv, setTv] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/tv")
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
  }, []);
  if (isLoading) {
    return (
      <div className="container">
        <p>loading</p>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <Title name="Tv Shows" />
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
          {tv.map((data) => (
            <div className="col-md my-2 text-center" key={data.id}>
              <img
                className="mx-2"
                src={data.poster_path}
                alt={data.name}
                width="200"
                height="200"
              />
              <h5 className="mt-2">{data.name}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default TvList;
