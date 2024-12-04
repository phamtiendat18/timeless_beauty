import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import info from "../assets/images/info.png";
import myOrder from "../assets/images/myOrder.png";
import orderHistory from "../assets/images/orderHistory.png";
import logout from "../assets/images/logout.png";

export default function MenuUser({ number }) {
  const navigation = useNavigate();
  return (
    <div>
      <div className="flex items-center mb-[10px]">
        <img src={avatar} alt="" />
        <span className="text-[24px] ml-5">Đỗ Thị Loan</span>
      </div>
      <div className="pt-[30px] border-t-2 border-[#F88CAD]">
        <div className="mb-[20px]">
          <Link
            to={"/me/information"}
            className={`flex gap-3 ${number === 1 && "text-[#F88CAD]"}`}
          >
            {" "}
            <img src={info} alt="" /> Thông tin tài khoản
          </Link>
        </div>
        <div className="mb-[20px]">
          <Link
            to={"/me/my-order"}
            className={`flex gap-3 ${number === 2 && "text-[#F88CAD]"}`}
          >
            {" "}
            <img src={myOrder} alt="" /> Đơn hàng của tôi
          </Link>
        </div>
        <div className="mb-[20px]">
          <Link
            to={"/me/order-history"}
            className={`flex gap-3 ${number === 3 && "text-[#F88CAD]"}`}
          >
            {" "}
            <img src={orderHistory} alt="" /> Lịch sử mua hàng
          </Link>
        </div>
        <div className="mb-[20px]">
          <Link
            className={`flex gap-3`}
            onClick={() => {
              localStorage.clear();
              navigation("/login");
            }}
          >
            {" "}
            <img src={logout} alt="" /> Đăng xuất
          </Link>
        </div>
      </div>
    </div>
  );
}
