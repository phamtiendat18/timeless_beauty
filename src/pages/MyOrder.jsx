import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuUser from "../components/MenuUser";
import myOrderImg from "../assets/images/myOrderImg.png";
import shipLine from "../assets/images/shipLine.png";

export default function MyOrder() {
  return (
    <div>
      <Header path1={"Tài khoản"} path2={"Đơn hàng của tôi"} />
      <div className="flex mx-[85px] mt-[73px] mb-[37px]">
        <MenuUser number={2} />
        <div className="ml-[26px] relative">
          <img
            src={shipLine}
            alt=""
            className="absolute top-[103px] left-[69px]"
          />
          <img src={myOrderImg} className="w-[997px]" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
