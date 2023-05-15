import Send from "../popup/Send";
import "./balnce.css";
import { Link } from "react-router-dom";

function Balance() {
  return (
    <>
      <div className="balance">
        <div className="ba-balance-inner text-center">
          <div className="icon">
            <img src={require("../../assets/1.png")} alt="" />
          </div>
          <h5 className="title">Total Balance</h5>
          <h5 className="amount">20000rs</h5>
        </div>
        <div className="add-balance-area pd-top-40">
          <div className="container">
            <Link
              to="/addbalance"
              className="ba-add-balance-title ba-add-balance-btn"
            >
              <h5>Add balance</h5>
              <i className="fa fa-plus"></i>
            </Link>
            <div className="ba-add-balance-inner mg-top-40">
              <div className="row ">
                <div className="col-6">
                  <Link className="btn btn-blue ba-add-balance-btn" to="/">
                    Withdraw
                    <i className="fa fa-arrow-down"></i>
                  </Link>
                </div>
                <div className="col-6">
                  <Send />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
