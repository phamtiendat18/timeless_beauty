import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/cart-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarDropDown from "./AvatarDropDown";

export default function Header({ path1, path2, path3 }) {
  const isLogin = localStorage.getItem("isLogin");
  return (
    <div>
      <div className="bg-[#F88CAD] flex justify-center items-center h-[60px]">
        <p className="text-white text-[24px]">
          MUA HÀNG TẠI WEBSITE - NHẬN VÔ VÀN ƯU ĐÃI
        </p>
      </div>
      <div className="flex flex-wrap items-center mb-[20px] mx-[84px] justify-between ">
        <Link
          to={"#"}
          className="flex items-center mb-5 font-400 text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0 block w-[14%] uppercase text-center"
        >
          <div className="w-[130px] h-[120px] flex items-center justify-center">
            <img src={logo} />
          </div>
        </Link>
        <Link
          to={"/"}
          className=" font-400 text-gray-600 hover:text-gray-900 block w-[14%] uppercase text-[25px] text-center"
        >
          Trang chủ
        </Link>
        <Link
          to={"/about-us"}
          className=" font-400 text-gray-600 hover:text-gray-900 block w-[14%] uppercase text-[25px] text-center"
        >
          Giới thiệu
        </Link>
        <Link
          to={"/products"}
          className=" font-400 text-gray-600 hover:text-gray-900 block w-[14%] uppercase text-[25px] text-center"
        >
          Sản phẩm
        </Link>
        <Link
          to={"/contact"}
          className=" font-400 text-gray-600 hover:text-gray-900 block w-[14%] uppercase text-[25px] text-center"
        >
          Liên hệ
        </Link>
        <Link
          to={"/news"}
          className=" font-400 text-gray-600 hover:text-gray-900 block w-[14%] uppercase text-[25px] text-center"
        >
          Tin tức
        </Link>
        <div className="flex items-center">
          <div className=" font-400 text-gray-600 hover:text-gray-900 block w-[14%] flex items-center  gap-[25px]">
            <Link>
              <div className="w-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
            </Link>
            {isLogin ? (
              <div>
                <AvatarDropDown />
              </div>
            ) : (
              <Link>
                <div className="w-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </div>
              </Link>
            )}
            <Link to={"/cart"}>
              <div className=" w-[20px] h-[20px]">
                <img src={cartIcon} alt="" className="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[62px] flex items-center pl-[85px] bg-[#FEECF0]">
        <p className="text-[18px]">
          Trang chủ &gt;&gt;{" "}
          <span className={`${!path2 ? "text-[#E45C81] font-bold" : ""}`}>
            {!path2 && !path3 ? path1 : `${path1} >>`}
          </span>
          {path2 && !path3 ? (
            <span className="text-[#E45C81] font-bold">&nbsp;{path2}</span>
          ) : (
            path3 && (
              <>
                <span>{path2} &gt;&gt; </span>
                <span className="text-[#E45C81] font-bold">{path3}</span>
              </>
            )
          )}
        </p>
      </div>
    </div>
  );
}
