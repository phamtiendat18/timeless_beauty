import React from "react";
import { Avatar, Dropdown, Menu, Space } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import avatar from "../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";

const AvatarDropDown = () => {
  const navigation = useNavigate();
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "profile":
        navigation("/me/information");
        break;
      case "logout":
        alert("Đăng xuất");
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: "profile",
          label: "Xem thông tin cá nhân",
          icon: <InfoCircleOutlined />,
        },
        {
          key: "logout",
          label: "Đăng xuất",
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar src={avatar} />
    </Dropdown>
  );
};

export default AvatarDropDown;
