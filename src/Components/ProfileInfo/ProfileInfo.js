import React, { useState } from 'react';
import { Card, Avatar, Typography, Space, Button } from 'antd';
import { EnvironmentOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import  './ProfileInfo.css'

const { Title, Text } = Typography;

const ProfileInfo = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const profileData = {
    name: "Albert Flores",
    title: "Senior Product Designer | UI/UX",
    subtitle: "Designer | Graphic Designer | Web...",
    location: "Clinton, Maryland",
    stats: {
      profileVisitors: 140,
      resumeViewers: 20,
      myJobs: 88
    },
    interviews: [
      {
        id: 1,
        role: "UI UX Designer",
        company: "Figma",
        datetime: "16th Feb | 13:45",
        location: "Remote",
        status: "Accepted"
      },
      {
        id: 2,
        role: "UI UX Designer",
        company: "Figma",
        datetime: "16th Feb | 13:45",
        location: "Remote",
        status: "Accepted"
      },
      {
        id: 3,
        role: "UI UX Designer",
        company: "Figma",
        datetime: "16th Feb | 13:45",
        location: "Remote",
        status: "Accepted"
      }
    ]
  };

  return (
    <div className="max-w-xl mx-auto p-4 profileInfo">
      {/* Cover Image and Profile Section */}
      <div className="relative">
        <div className="h-32 bg-blue-100 rounded-t-lg overflow-hidden coverImage">
          <img
            src="/assets/images/profileCover.png"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="profileMain">
          <Avatar
            size={128}
            src="/assets/images/profileInfo.png"
            className="border-4 border-white"
          />
        </div>

        <div className="mt-20 text-center infoBox">
        <Title level={3} style={{ marginBottom: '4px' }}>{profileData.name}</Title>
        <Text type="secondary">{profileData.title}</Text>
        <br />
        <Text type="secondary" className="text-sm">{profileData.subtitle}</Text>
        <div className="flex items-center justify-center gap-2 mt-2 location">
          <Text type="secondary">{profileData.location}</Text>
        </div>
      </div>

      </div>

      {/* Profile Info */}
     

      {/* Stats Grid */}
      <Card className="mt-6 profileStats">
        <div className="grid grid-cols-3 gap-4">
          <div className="statsBox">
          <Text type="secondary">Profile Visitors</Text>
            <Title level={4} className="text-blue-600 mb-0">
              {profileData.stats.profileVisitors}
            </Title>
            
          </div>
          <div className="statsBox">
          <Text type="secondary">Resume Viewers</Text>
            <Title level={4} className="text-blue-600 mb-0">
              {profileData.stats.resumeViewers}
            </Title>
            
          </div>
          <div className="statsBox">
          <Text type="secondary">My Jobs</Text>
            <Title level={4} className="text-blue-600 mb-0">
              {profileData.stats.myJobs}
            </Title>
            
          </div>
        </div>
      </Card>

      {/* Calendar Section */}
      <Card className="profileCalendar">
        <div 
          className="cursor-pointer"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        >
        
            <div className='caledarHeading'>
              <h4>My calendar</h4>
              <Text type="secondary" className="text-sm">Upcoming Interviews</Text>
            </div>
            {isCalendarOpen ? <UpOutlined /> : <DownOutlined />}
         
        </div>

        {/* Dropdown Content */}
        {/* {isCalendarOpen && (
          <div className="mt-4">
            {profileData.interviews.map((interview) => (
              <div key={interview.id} className="py-3 border-b last:border-b-0">
                <div className="flex items-center gap-4">
                  <Avatar
                    style={{ backgroundColor: '#f0f0f0' }}
                    size={40}
                    src="/api/placeholder/40/40"
                  />
                  <div className="flex-grow">
                    <Text strong>{interview.role}</Text>
                    <br />
                    <Text type="secondary" className="text-sm">
                      {interview.company}
                    </Text>
                    <br />
                    <Text type="secondary" className="text-sm">
                      {interview.datetime} | {interview.location}
                    </Text>
                  </div>
                  <Space>
                    <Button
                      size="small"
                      style={{
                        backgroundColor: '#e6fff0',
                        color: '#52c41a',
                        border: 'none'
                      }}
                    >
                      {interview.status}
                    </Button>
                    <Button
                      size="small"
                      type="text"
                      style={{ color: '#666' }}
                    >
                      Deny
                    </Button>
                  </Space>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </Card>
    </div>
  );
};

export default ProfileInfo;