import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Login from "../login page/Login";
import Copyright from "../../componenets/copyright/Copyright";

const Home = () => {
  return (
    <>
      <div className="home container">
        <div className="header">
          <div className="Hleft">
            <h2 className="title">Welcome!</h2>
            <h2>
              To your <span>E-wallet application</span>{" "}
            </h2>
            <Link to="/login" className=" Sbtn btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="rigt">
          <Login />
        </div>
      </div>
      <Copyright sx={{ mt: 5 }} />
    </>
  );
};

export default Home;
