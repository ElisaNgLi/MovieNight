import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Account.css";
import Title from "../Style/Title";

const Account = () => {
  const [validateFirstName, setValidFirstName] = useState(true);
  const [validateLastName, setValidLastName] = useState(true);

  const initialState = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com",
  };

  const [{ firstName, lastName, email }, setState] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleValidFirstName = () => {
    setValidFirstName(firstName.trim().length >= 2 ? true : false);
  };

  const handleValidLastName = () => {
    setValidLastName(lastName.trim().length >= 2 ? true : false);
  };

  const handleEdit = () => {
    document.getElementById("firstName").disabled = false;
    document.getElementById("lastName").disabled = false;
    document.getElementById("edit").style.display = "none";
    document.getElementById("save").style.display = "inline";
    document.getElementById("cancel").style.display = "inline";
  };

  const handleSave = () => {
    if (validateFirstName === true && validateLastName === true) {
      document.getElementById("firstName").disabled = true;
      document.getElementById("lastName").disabled = true;
      document.getElementById("edit").style.display = "inline";
      document.getElementById("save").style.display = "none";
      document.getElementById("cancel").style.display = "none";
    }
  };

  const handleCancel = () => {
    clearState();
    document.getElementById("firstName").disabled = true;
    document.getElementById("lastName").disabled = true;
    document.getElementById("edit").style.display = "inline";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
  };

  return (
    <div className="container">
      <Title name="My Account" />
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/myaccount"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resetpassword">
                Reset Password
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <form className="row g-3 mt-3">
            <div className="col-md-6">
              <div
                className={`invalid-field ${
                  validateFirstName === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="firstName"
                  value={firstName}
                  onChange={onChange}
                  onBlur={handleValidFirstName}
                  autoFocus
                  disabled
                />
                {validateFirstName === false && (
                  <p>Please enter your first name</p>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`invalid-field ${
                  validateLastName === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  id="lastName"
                  value={lastName}
                  onChange={onChange}
                  onBlur={handleValidLastName}
                  disabled
                />
                {validateLastName === false && (
                  <p>Please enter your last name</p>
                )}
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                disabled
              />
            </div>
            <div className="text-center">
              <button
                id="edit"
                type="button"
                className="btn edit btn-mb"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                id="save"
                type="button"
                className="btn save btn-mb"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                id="cancel"
                type="button"
                className="btn cancel btn-mb"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
