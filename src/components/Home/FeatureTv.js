import React, { useState, useEffect } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

import SubTitle from "../Style/SubTitle";

const FeatureTv = () => {
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

  const random = (max, tv) => {
    let result = [];
    let counter = 0;

    while (counter < max) {
      let rand = tv[Math.floor(Math.random() * tv.length)];
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
        <p> is loading</p>
      </div>
    );
  } else {
    return (
      <div className="container my-3">
        <SubTitle name="Feature Tv Shows" />
        <ScrollMenu
          arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
          arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
          data={random(
            6,
            tv.map((data, index) => (
              <img
                className="mx-2"
                key={index.toString()}
                src={data.poster_path}
                alt={data.name}
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

export default FeatureTv;
