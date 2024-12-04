import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-64 pr-[60px] pt-[40px]">
      <div className="mb-[20px]">
        <h2 className="text-[#F88CAD] text-[20px] font-bold text-lg mb-2">
          Danh Mục Sản Phẩm
        </h2>
        <ul>
          <li className="mb-[20px] cursor-pointer hover:text-pink-400">
            <Link to={"/products/skincare"}>Chăm Sóc Da</Link>
          </li>
          <li className="cursor-pointer hover:text-pink-400">
            <Link to={"/products/make-up"}>Trang Điểm</Link>
          </li>
        </ul>
      </div>

      <div className="mb-[20px]">
        <h2 className="text-[#F88CAD] text-[20px] font-bold text-lg mb-2">
          Thương Hiệu
        </h2>
        <ul>
          {[
            "L'Oréal",
            "Laneige",
            "Maybelline",
            "Torriden",
            "Clio",
            "Cerave",
            "Cocoon",
          ].map((brand, index) => (
            <li key={index} className="mb-[15px] flex items-center">
              <input
                type="checkbox"
                id={`brand-${index}`}
                className="mr-2 appearance-none w-4 h-4 border border-pink-500 rounded-sm checked:bg-pink-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:w-4 checked:after:h-4 checked:after:justify-center checked:after:items-center"
              />
              <label htmlFor={`brand-${index}`} className="cursor-pointer">
                {brand}
              </label>
            </li>
          ))}
        </ul>
        <button className=" font-bold mt-2 cursor-pointer hover:underline">
          Xem thêm
        </button>
      </div>

      <div>
        <h2 className="text-[#F88CAD] text-[20px] font-bold text-lg mb-[20px]">
          Chọn mức Giá
        </h2>
        <ul>
          {[
            "Dưới 200.000đ",
            "Từ 200.000đ - 400.000đ",
            "Từ 400.000đ - 600.000đ",
            "Từ 600.000đ - 800.000đ",
            "Trên 800.000đ",
          ].map((priceRange, index) => (
            <li key={index} className="mb-[15px] flex items-center">
              <input
                type="checkbox"
                id={`price-${index}`}
                className="mr-2 appearance-none w-4 h-4 border border-pink-500 rounded-sm checked:bg-pink-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:w-4 checked:after:h-4 checked:after:justify-center checked:after:items-center"
              />
              <label htmlFor={`price-${index}`} className="cursor-pointer">
                {priceRange}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
