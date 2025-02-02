import React from "react";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";
import JobsBoard from "../../Components/JobsBoard/JobsBoard";
import './Home.css'

const Home = () => {
 return (
    <div className="homePage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <ProfileInfo />
          <JobsBoard />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
