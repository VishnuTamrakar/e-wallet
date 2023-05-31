import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: "#fff" }} to="/">
            E-Wallet
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transaction">
                  Transaction
                </Link>
              </li>
            </ul>
            <div className="button">
              <Link className="btn lBtn " to="/login">
                login
              </Link>
              <Link className="btn sBtn " to="/signup">
                Signup
              </Link>
              <div className="profile">
                <Link to="/profile">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={require("../../assets/download.png")}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
