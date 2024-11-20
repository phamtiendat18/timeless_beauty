import React from "react";
import Header from "../components/Header";

export default function Products() {
  return (
    <div>
      <Header />
      <div className="h-[62px] flex items-center pl-[85px] bg-[#FEECF0]">
        <p className="text-[18px]">
          Trang chủ &gt;&gt;{" "}
          <span className="text-[#E45C81] font-bold">Sản phẩm</span>{" "}
        </p>
      </div>
      <div className="flex mx-[85px]">
        <div>
          <div>
            <h3>Danh Mục Sản Phẩm</h3>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
