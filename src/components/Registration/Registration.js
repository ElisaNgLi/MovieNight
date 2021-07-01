import React from "react";
import { Link } from "react-router-dom";

import Title from "../Style/Title";

const Registration = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Title name="Welcome to Movie Night!" />
        <p className="card-subtitle text-center">
          Already have an account?
          <Link to="/login" className="card-link">
            {" "}
            Login Here
          </Link>
        </p>
        <form className="row g-3 mt-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              autoFocus
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-12">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4">
          <h4>Or Sign Up with</h4>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Facebook
              </button>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
