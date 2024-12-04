import React, { useState } from "react";
import eyeIcon from "../assets/images/eye-icon.svg";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <Header path1={"Đăng nhập tài khoản"} />
      <div className="w-[622px] mx-auto bg-white shadow-lg rounded-lg p-[51px] mt-[60px] mb-[80px]">
        <h2 className="text-[36px] font-bold mb-6 text-center uppercase">
          Đăng nhập
        </h2>
        <p className="text-center text-[24px] mb-[30px]">
          Nếu bạn chưa có tài khoản,{" "}
          <Link to={"/sign-up"} className="text-[#F88CADE5]">
            đăng ký
          </Link>{" "}
          tại đây
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-[30px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 border border-gray-300 rounded-[16px] text-[24px] h-[80px]"
              placeholder="Email"
              required
            />
          </div>
          <div className=" relative mb-[30px]">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 border border-gray-300 rounded-[16px] text-[24px] h-[80px]"
              placeholder="Mật khẩu"
              required
            />
            <div
              className="absolute right-5 top-7 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src={eyeIcon} alt="" />
              ) : (
                <Button>Hiện</Button>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#F88CAD] text-white p-2 rounded-[16px] w-full h-[80px] text-[36px] uppercase mb-3"
            onClick={() => {
              localStorage.setItem("isLogin", true);
              navigation("/cart/checkout");
            }}
          >
            Đăng nhập
          </button>
          <div className="text-right text-[22px] mb-3">
            <Link>Quên mất khẩu?</Link>
          </div>
          <p className="text-center italic text-[24px] mb-5">
            Hoặc đăng nhập bằng
          </p>
          <div className="flex justify-between">
            <Button
              className="text-[24px] w-[193px] h-[55px] flex justify-between text-white"
              color="primary"
              variant="solid"
              style={{ background: "#3D5A98" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                color="#fff"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
              Facebook
            </Button>
            <Button
              className="text-[24px] w-[193px] h-[55px] flex justify-between"
              color="primary"
              variant="solid"
              style={{ background: "#FF2C11" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              Google
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
