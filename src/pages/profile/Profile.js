import React from "react";
import "./profile.css";
import Copyright from "../../componenets/copyright/Copyright";

const Profile = () => {
  return (
    <>
      <div className="mg-top-40 profile top container">
        <div className="left">
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Name</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">Example@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">801234567</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">mumbai,maharashtra</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Mumbai</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="balance">
            <h2 className="title">Balance</h2>
            <h4 className="blnc">2000rs</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <Copyright sx={{ mt: 5 }} />
      </div>
    </>
  );
};

export default Profile;
