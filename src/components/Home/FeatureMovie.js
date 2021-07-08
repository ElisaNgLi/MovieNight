import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

const FeatureMovie = ({ movies }) => {
  const random = (movies) => {
    let results = [];
    for (let i = 0; i < 6; i++) {
      let rand = movies[Math.floor(Math.random() * 16)];
      results.push(rand);
    }
    return results;
  };
  return (
    <div className="container">
      <ScrollMenu
        arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
        arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
        data={random(
          movies.map((data, index) => (
            <img
              className="mx-2"
              key={index}
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
};

export default FeatureMovie;
