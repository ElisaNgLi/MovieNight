import React from "react";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  return (
    <div className="container">
      <h2 className="text-center my-5">Search for ...</h2>
      <div className="row">
        <div className="col-md my-2 text-center" key={props.id}>
          <Link to={`/${props.type}/${props.id}`}>
            <img
              className="mx-2"
              src={props.poster_path}
              alt={props.title}
              width="200"
              height="200"
            />
          </Link>
          <h5 className="mt-2">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
