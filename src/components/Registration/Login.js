import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import Title from "../Style/Title";
import SocialButton from "./SocialButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmail, setValidEmail] = useState();
  const [validatePassword, setValidPassword] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleValidEmail = () => {
    setValidEmail(email.includes("@"));
  };

  const handleValidPassword = () => {
    setValidPassword(password.trim().length >= 8);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
        <form className="row g-3 mt-3" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="col-8">
              <div
                className={`invalid-field ${
                  validateEmail === false ? "invalid" : ""
                }`}
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                  onBlur={handleValidEmail}
                  autoFocus
                  required
                />
                {validateEmail === false && (
                  <p>Please provided a valid email</p>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-8">
              <div
                className={`invalid-field ${
                  validatePassword === false ? "invalid" : ""
                }`}
              >
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                  onBlur={handleValidPassword}
                  required
                />
                {validatePassword === false && (
                  <p>Password must be at least 8 characters long</p>
                )}
              </div>
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
