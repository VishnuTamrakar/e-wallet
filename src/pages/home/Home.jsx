import React from "react";
import Balance from "../../componenets/balance/Balance";
import Transection from "../../componenets/transection/Transection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Balance />
      <div className="container">
        <Transection />
        <div className="btn-wrap mg-top-40 mg-bottom-40">
          <div className="container">
            <Link className="btn-large btn-blue w-100 " to="/transaction">
              All Transactions
              <i className="fa fa-angle-double-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
