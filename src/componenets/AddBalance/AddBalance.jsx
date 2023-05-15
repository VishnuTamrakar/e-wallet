import React from "react";
import "./addBalance.css";

const AddBalance = () => {
  return (
    <>
      <div className="add-balance-inner-wrap add-balance-inner-wrap-show">
        <div className="container">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Balance</h5>
              </div>
              <div className="modal-body">
                <div className="action-sheet-content">
                  <form>
                    <div className="form-group basic">
                      <div className="input-wrapper">
                        <label className="lable" htmlFor="account1">
                          From
                        </label>
                        <select
                          className="form-control custom-select"
                          id="account1"
                        >
                          <option value="0">Saving</option>
                          <option value="1">Current</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group basic">
                      <label className="lable">Enter Amount</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="lable">
                            $
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value="300"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group basic">
                      <button
                        type="botton"
                        className="btn-c btn-primary btn-block btn-lg"
                        data-dismiss="modal"
                      >
                        Deposit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBalance;
