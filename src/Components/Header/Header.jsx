import React, {useState} from "react";
import "./Header.css";
import { Input, Button, Avatar, Drawer } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

const Header = () => {

  const [visible, setVisible] = useState(false);

  const menuItems = [
    { label: "Find Jobs", className: "findjob" },
    { label: "Top Companies" },
    { label: "Job Tracker" },
    { label: "My Calendar" },
    { label: "Documents" },
    { label: "Messages" },
    { label: "Notifications" },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex items-center space-x-4 left">
              <div className="logoBox">
                <img src="/assets/images/logo.png" alt="logo" className="h-8" />
              </div>

              <div className="headMenu hiddenOnMobile">
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    type="link"
                    className={item.className || ""}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              <div className="hamburgerMenu visibleOnMobile">
        <Button 
          type="text" 
          icon={<MenuOutlined />} 
          onClick={showDrawer} 
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            type="link"
            className={item.className || ""}
            onClick={onClose}
          >
            {item.label}
          </Button>
        ))}
      </Drawer>

            </div>

            <div className="d-flex items-center space-x-4 right">
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                className="w-64"
              />
              <Button type="primary" className="resumeButton">
                Resume Builder
              </Button>
              <Avatar size="large" src="assets/images/profileAvatar.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
