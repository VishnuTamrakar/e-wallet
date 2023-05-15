import React from "react";
import { Link } from "react-router-dom";

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
                <Link
                  className="nav-link "
                  style={{ color: "#fff" }}
                  aria-current="page"
                  to="/"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "#fff" }}
                  to="/transaction"
                >
                  Transaction
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "#fff" }}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "#fff" }}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </ul>
            <button class="btn btn-dark" type="submit">
              Balance:2000rs
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
