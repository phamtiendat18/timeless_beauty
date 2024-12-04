import React, { useState } from "react";
import MenuUser from "../components/MenuUser";
import { Button, DatePicker, Input } from "antd";
import avatar from "../assets/images/avatar2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Information() {
  const [info, setInfo] = useState({
    name: "Đỗ Thị Loan",
    phone: "0353341841",
    email: "loan@gmail.com",
    address: "số 326 đường Giáp Bát",
    province: "Hà Nội",
    district: "Hoàng Mai",
    commune: "Giáp Bát",
    notes: "",
    gender: false,
    birthday: "26/12/2002",
  });
  return (
    <div>
      <Header path1={"Tài khoản"} path2={"Thông tin tài khoản"} />
      <div className="flex mx-[86px] my-[60px]">
        <div className="mr-[26px]">
          <MenuUser number={1} />
        </div>
        <div className="pt-[15px] shadow-lg w-[996px] pb-[50px]">
          <h1 className="text-[28px] text-[#E45C81] uppercase font-medium pl-[34px]">
            Thông tin tài khoản
          </h1>
          <div className="mx-[82px] w-full">
            <div className="flex gap-x-[80px]">
              <div className="w-[520px]">
                <form>
                  <div className="mb-4">
                    <div className="text-[20px]">Tên đăng nhập</div>
                    <Input
                      type="text"
                      name="name"
                      value={info.name}
                      className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] w-full text-[18px] h-[50px]"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div className="mb-4 ">
                    <div className="text-[20px]">Email</div>
                    <Input
                      type="email"
                      name="email"
                      value={info.email}
                      className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] w-full text-[18px] h-[50px]"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 ">
                    <div className="text-[20px]">Số điện thoại</div>
                    <Input
                      type="text"
                      name="phone"
                      value={info.phone}
                      className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] w-full text-[18px] h-[50px]"
                      placeholder="Số điện thoại"
                    />
                  </div>

                  <div>
                    <div className="text-[20px]">Giới tính</div>
                    <div className="flex gap-5">
                      <div className="mb-4 flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          className="accent-[#E45C81] w-[14px] h-[14px] mr-2"
                          id="0"
                          value={false}
                          checked
                        />
                        <label htmlFor="0" className="text-[18px]">
                          Nữ
                        </label>
                      </div>
                      <div className="mb-4 flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          className="accent-[#E45C81] w-[14px] h-[14px] mr-2"
                          id="1"
                          value={true}
                        />
                        <label htmlFor="1" className="text-[18px]">
                          Nam
                        </label>
                      </div>
                      <div className="mb-4 flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          className="accent-[#E45C81] w-[14px] h-[14px] mr-2"
                          id="other"
                          value={null}
                        />
                        <label htmlFor="other" className="text-[18px]">
                          Khác
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[20px] mb-4">Ngày sinh</div>
                    <DatePicker
                      placeholder="Ngày sinh"
                      format={"DD/MM/YYYY"}
                      className="h-[40px]"
                    />
                  </div>
                </form>
              </div>
              <div className="h-[245px] border-l-2 border-[#F88CAD] pl-[64px]">
                <img
                  src={avatar}
                  className="w-[135px] mx-auto mb-[30px]"
                  alt=""
                />
                <Button
                  style={{
                    background: "#F88CAD",
                    color: "white",
                    fontSize: "24px",
                    width: "165px",
                    height: "45px",
                  }}
                >
                  Chọn ảnh
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Button
                style={{
                  background: "#F88CAD",
                  color: "white",
                  fontSize: "24px",
                  width: "190px",
                  height: "45px",
                }}
              >
                Lưu thông tin
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
