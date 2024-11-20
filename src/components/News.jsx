import React from "react";
import { Link } from "react-router-dom";

export default function News({ img, title, des }) {
  return (
    <div className="w-[400px] h-[520px] border rounded-2xl border-[#F88CAD]">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="p-[15px]">
        <h3 className="font-bold">{title}</h3>
        <p>{des}</p>
        <div className="text-center">
          <Link className="text-center">Xem chi tiết</Link>
        </div>
      </div>
    </div>
  );
}
