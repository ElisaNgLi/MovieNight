import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import Title from "../Style/Title";
import SocialButton from "./SocialButton";

const Login = () => {
  return (
    <div className="card login mt-5 mb-5">
      <div className="card-body">
        <Title name="Sign In to Movie Night!" />
        <p className="card-subtitle text-center">
          Do not have an account?
          <Link to="/registration" className="card-link">
            {" "}
            Register Here
          </Link>
        </p>
        <form className="row g-3 mt-3">
          <div className="d-flex justify-content-center">
            <div className="col-8">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                autoFocus
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <Link id="link-pw" to="forgotpassword">
              Forgot your Movie Night password?
            </Link>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-md">
              Sign In
            </button>
          </div>
        </form>
        <hr />
        <div className="mt-3">
          <SocialButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
