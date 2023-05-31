import React from "react";
import Balance from "../../componenets/balance/Balance";
import Transection from "../../componenets/transection/Transection";
import { Link } from "react-router-dom";
import Copyright from "../../componenets/copyright/Copyright";

const Dashboard = () => {
  return (
    <>
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
      <Copyright sx={{ mt: 5 }} />
    </>
  );
};

export default Dashboard;
