import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPaid({
  title,
  img,
  type,
  oldPrice,
  price,
  quantity,
}) {
  const navigation = useNavigate()

  return (
    <div className="w-[892px] border-b-2 border-[#F88CAD] py-[20px]">
      <div className="flex justify-between">
        <div className="flex mb-[20px]">
          <div className="w-[120px] mr-[30px]">
            <img src={img} alt="" />
          </div>
          <div className="max-w-[600px]">
            <div className="text-[24px] ">{title}</div>
            <div className="text-[24px] text-[#00000070]">
              Phân loại: {type}
            </div>
          </div>
        </div>
        <div>
          <div className="text-right mb-[45px] text-[#E45C81] font-bold text-[24px]">
            Hoàn thành
          </div>
          <div className="text-right flex items-center">
            <span className="line-through text-[18px]">{oldPrice}.000đ</span>{" "}
            <span className="text-[24px] text-[#F88CAD]">
              &nbsp;{price}.000đ
            </span>
          </div>
        </div>
      </div>
      <div className="text-right mb-[20px]">
        <span className="text-[20px]">
          Tổng thanh toán( {quantity} sản phẩm ):
        </span>{" "}
        <span className="text-[24px] text-[#F88CAD] font-semibold">
          {+quantity * +price}.000đ
        </span>
      </div>
      <div className="text-right">
        <button
          style={{
            background: "#F88CAD",
            width: "177px",
            height: "50px",
            fontSize: "28px",
            borderRadius: "8px",
            color: "white",
          }}
          onClick={() => navigation("/products/product-detail")}
        >
          Đánh giá
        </button>
      </div>
    </div>
  );
}
