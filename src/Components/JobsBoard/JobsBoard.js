import React from "react";
import "./JobsBoard.css";
import { Link } from "react-router-dom";
import JobListingCard from "../JobListingCard/JobListingCard";
import { Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function JobsBoard() {
  return (
    <div className="jobsBoard">
      <div className="headBox">
        <h2>
          Find your Dream Job, <span>Albert!</span>
        </h2>
        <p>
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>

      <div className="searchBox">
        <Input
          placeholder="Job Title, Company, or Keywords"
          style={{ width: "40%", borderRadius: "8px" }}
        />
        <Select
          placeholder="Select Location"
          style={{ width: "20%", marginLeft: "8px", borderRadius: "8px" }}
          bordered={false}
        >
          <Option value="location1">Location 1</Option>
          <Option value="location2">Location 2</Option>
        </Select>
        <Select
          placeholder="Job Type"
          style={{ width: "20%", marginLeft: "8px", borderRadius: "8px" }}
          bordered={false}
        >
          <Option value="fulltime">Full Time</Option>
          <Option value="parttime">Part Time</Option>
        </Select>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          style={{ marginLeft: "8px", borderRadius: "8px" }}
        >
          Search
        </Button>
      </div>

      <div className="tags">
        <h5>Similar:</h5>
        <ul>
          <li>frontend</li>
          <li>Backend</li>
          <li>Graphic Designer</li>
        </ul>
      </div>

      <div className="featuredJobs unique">
        <div className="heading">
          <h3>Featured Jobs</h3>
          <Link>See Featured Jobs</Link>
        </div>

        <div className="jobWrapper">
          <JobListingCard />
        </div>
      </div>

      <div className="featuredJobs">
        <div className="heading">
          <h3>Recommended Jobs</h3>
          <Link>See Recommended Jobs</Link>
        </div>

        <div className="jobWrapper">
          <JobListingCard />
        </div>
      </div>

      <div className="featuredJobs">
        <div className="heading">
          <h3>Latest Jobs</h3>
          <Link>See Latets Jobs</Link>
        </div>

        <div className="jobWrapper">
          <JobListingCard />
        </div>
      </div>
    </div>
  );
}

export default JobsBoard;
