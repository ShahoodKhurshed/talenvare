import React from "react";
import { Card, Button, Avatar, Typography, Space } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";
import "./JobListingCard.css";

const { Text, Title } = Typography;

const JobListingCard = () => {
  const jobsData = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo1.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo2.png",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo3.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo3.png",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo3.png",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo1.png",
    },
    {
      id: 7,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo2.png",
    },
    {
      id: 8,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo3.png",
    },
    {
      id: 9,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo3.png",
    },
    {
      id: 10,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      timePosted: "1 day ago",
      applicants: "22 applicants",
      isPromoted: true,
      companyLogo: "/path/to/logo3.png",
    },
  ];

  return (
    <>
      {jobsData.map((jobData) => (
        <Card
          className="max-w-md mx-auto shadow-sm hover:shadow-md transition-shadow"
          bodyStyle={{ padding: "16px" }}
        >
          <div className="promoted">
            {jobData.isPromoted && (
              <Text type="secondary" className="text-xs">
                Promoted
              </Text>
            )}
          </div>

          <div className="jobName">
            <div className="left">
              <Avatar
                size={40}
                style={{ backgroundColor: "#f0f0f0" }}
                icon={
                  <img
                    src="/assets/images/jobListingImage.png"
                    alt="Company logo"
                  />
                }
              />
            </div>

            <div className="right">
              <Title level={5} className="mb-1">
                {jobData.title}
              </Title>
              <Text className="block text-gray-600">{jobData.company}</Text>
            </div>
          </div>

          <div className="location">
            <HiOutlineLocationMarker />
            <Text type="secondary">{jobData.location}</Text>
          </div>

          <div className="applicant">
            <ClockCircleOutlined />
            <Text type="secondary">
              {jobData.timePosted} | {jobData.applicants}
            </Text>
          </div>

          <div className="ButtonBox">
            <Button type="primary" block>
              Apply Now
            </Button>
            <FaRegBookmark className="text-gray-400 text-lg" />
          </div>
        </Card>
      ))}
    </>
  );
};

export default JobListingCard;
