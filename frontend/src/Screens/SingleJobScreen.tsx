import React from "react";
import Header from "../Components/Header";

const SingleJobScreen: React.FC = () => {
  return (
    <div className="container lg:max-w-7xl mx-auto px-4 py-8">
      <div className="my-2 px-16 py-12 job-heading-div">
        <h1>Computer Operator Part Time / Data Entry Operator Fresher</h1>
        <h5>Seclob Techonologies</h5>
        <p>Cyberpark, Calicut</p>
        <h6>₹10,500 - ₹20,000 a month</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="date-n-count">
            <span>Posted 30+ days ago</span>
            
            <span>Openings: 1</span>
          </div>

          <button className="">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default SingleJobScreen;
