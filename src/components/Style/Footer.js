import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </section>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Watch</h6>
            <p>
              <Link id="footer-link" to="/" className="text-reset">
                Movies
              </Link>
            </p>
            <p>
              <Link id="footer-link" to="/" className="text-reset">
                TV
              </Link>
            </p>
            <p>
              <Link id="footer-link" to="/" className="text-reset">
                Free
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">My Account</h6>
            <p>
              <Link id="footer-link" to="/" className="text-reset">
                My Movie Night
              </Link>
            </p>
            <p>
              <Link id="footer-link" to="/" className="text-reset">
                Account
              </Link>
            </p>
            <p>
              <Link id="footer-link" to="/" className="text-reset">
                Settings
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Help</h6>
            <p>
              <Link id="footer-link" to="/about" className="text-reset">
                About Us
              </Link>
            </p>
            <p>
              <Link id="footer-link" to="/terms" className="text-reset">
                Terms and Condition
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
