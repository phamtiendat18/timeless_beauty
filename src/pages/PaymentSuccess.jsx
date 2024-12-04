import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import successIcon from "../assets/images/success-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PaymentSuccess() {
  const navigation = useNavigate();
  return (
    <div>
      <Header path1={"Giỏ hàng"} path2={"Hoàn tất thanh toán"} />
      <div className="flex flex-col items-center">
        <div className="w-fit flex flex-col items-center mb-[25px] mt-[34px] m-auto">
          <h2 className="uppercase text-[#E45C81] font-medium text-[32px] mb-[10px]">
            Hoàn tất thanh toán
          </h2>
          <div className="w-[80%] h-[2px] bg-[#F88CAD]"></div>
        </div>
        <div className="w-[200px] h-[200px] mb-[15px]">
          <img src={successIcon} alt="" />
        </div>
        <div className="text-[32px] mb-[24px]">
          Cảm ơn bạn đã tin tưởng lựa chọn chúng tôi!
        </div>
        <div className="text-normal pl-[55px] py-[20px] bg-[#FEECF0B2] w-[671px] leading-[40px] text-[20px] rounded-[8px] shadow-lg mb-[34px]">
          Mã đơn hàng: #FDt516 <br></br>Ngày đặt hàng: 11/11/2024 - 12:01
          <br></br>Thành tiền: 160.000đ <br></br>Phương thức thanh toán: Thanh
          toán khi nhận hàng <br></br>Bạn có thể xem chi tiết trong{" "}
          <span className="text-[#F88CAD]">Đơn hàng của tôi</span>
          <br></br>
        </div>
        <Button
          color="primary"
          className="bg-[#F88CAD] text-white text-[28px] hover:bg-[#F88CAD] w-[400px] h-[60px] mb-[44px]"
          style={{
            background: "#F88CAD",
            color: "white",
            border: "1px solid #F88CAD",
          }}
          onClick={() => navigation("/")}
        >
          Tiếp tục mua hàng
        </Button>
      </div>
      <Footer />
    </div>
  );
}
