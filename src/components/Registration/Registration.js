import React from "react";
import { Link } from "react-router-dom";

import "./Registration.css";
import Title from "../Style/Title";
import SocialButton from "./SocialButton";

const Registration = () => {
  return (
    <div className="card registration mt-5 mb-5">
      <div className="card-body">
        <div className="advertisement">
          <div className="row">
            <div className="col-3 mt-0 mb-0">
              <p>LIMITED TIME OFFER</p>
            </div>
            <div className="col mt-0 mb-0">
              <p>New user sign up offer</p>
              <h6>Rent it.Buy it. Get 30% off*</h6>
              <p>First purchase only*</p>
            </div>
            <div className="col-4 mt-0 mb-0">
              <h6>WATCH FOR FREE</h6>
              <p>10.000+ Movies + TV SHOWS</p>
            </div>
          </div>
        </div>
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
            <button type="submit" className="btn btn-primary btn-md">
              Sign Up
            </button>
          </div>
        </form>
        <hr />
        <div className="mt-3">
          <h4>Or Sign Up with</h4>
          <SocialButton />
        </div>
      </div>
    </div>
  );
};

export default Registration;
