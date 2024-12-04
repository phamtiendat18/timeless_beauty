import React from "react";
import { Link } from "react-router-dom";
import clock from "../assets/images/clock.png";

export default function News({ img, title, des, time }) {
  return (
    <div className="w-[400px] h-[520px] border rounded-2xl border-[#F88CAD] hover:scale-105 pb-0 hover:cursor-pointer">
      <div className="w-[400px] h-[285px]">
        <img src={img} alt="" />
      </div>
      <div className="p-[15px] flex flex-col justify-between h-[235px]">
        <div className="flex justify-between mb-[8px] items-center">
          <div className="w-[61px] h-[22px] text-[15px] text-center text-white border border-0 rounded-lg bg-[#E45C81]">
            Tin tức
          </div>
          <div className="flex">
            <img src={clock} alt="" />
            <span className="text-[#F88CAD] ml-[5px]">{time}</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-[10px]">{title}</h3>
        </div>
        <div>
          <p>{des}</p>
        </div>
        <div className="text-center">
          <Link className="text-center">Xem chi tiết &gt;&gt;</Link>
        </div>
      </div>
    </div>
  );
}
