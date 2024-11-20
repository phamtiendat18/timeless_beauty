import React from "react";
import { Link } from "react-router-dom";
import clock from "../assets/images/clock.png";

export default function News({ img, title, des }) {
  return (
    <div className="w-[400px] h-[520px] border rounded-2xl border-[#F88CAD]">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="p-[15px]">
        <div className="flex justify-between mb-[8px] items-center">
          <div className="w-[61px] h-[22px] text-[15px] text-center text-white border border-0 rounded-lg bg-[#E45C81]">
            Tin tức
          </div>
          <div className="flex">
            <img src={clock} alt="" />
            <span className="text-[#F88CAD] ml-[5px]">20/10/2024</span>
          </div>
        </div>
        <h3 className="font-bold mb-[15px]">{title}</h3>
        <p>{des}</p>
        <div className="text-center">
          <Link className="text-center">Xem chi tiết &gt;&gt;</Link>
        </div>
      </div>
    </div>
  );
}
