import React, { useState } from "react";
import { Menu, Dropdown, Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const MenuDropDown = () => {
  const [hovered, setHovered] = useState(false);
  const navigation = useNavigate();

  // Submenu content
  const menu = (
    <div>
      <div className="bg-[#FFD5E3] mb-[10px] px-[8px] py-[6px] text-center text-[16px] uppercase rounded-[6px]">
        <Link to="/products/skincare" className="hover:text-[#E45C81]">
          Chăm sóc gia
        </Link>
      </div>
      <div className="bg-[#FFD5E3] px-[8px] py-[6px] text-center text-[16px] uppercase rounded-[6px]">
        <Link to="/products/make-up" className="hover:text-[#E45C81]">
          Trang điểm
        </Link>
      </div>
    </div>
  );

  return (
    <div style={{ display: "inline-block", margin: "20px" }}>
      <Dropdown overlay={menu} trigger={["hover"]}>
        <Typography.Text
          style={{
            cursor: "pointer",
            fontWeight: 400,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => navigation("/products")}
          className="font-400 text-gray-600 block uppercase text-[25px] text-center flex items-center"
        >
          Sản phẩm{" "}
          {hovered ? (
            <UpOutlined style={{ fontSize: "16px", paddingLeft: "10px" }} />
          ) : (
            <DownOutlined style={{ fontSize: "16px", paddingLeft: "10px" }} />
          )}
        </Typography.Text>
      </Dropdown>
    </div>
  );
};

export default MenuDropDown;
