import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import paginate from "../assets/images/paginate.png";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const products = [
  {
    image: img1,
    title: "Serum Torrien DIVE IN chứa Hyaluronic Acid",
    price: "200.000đ",
    oldPrice: "300.000đ",
    sold: 120,
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: "300.000đ",
    oldPrice: "500.000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "100.000đ-250.000đ",
    oldPrice: "200.000đ-432.000đ",
    sold: 45,
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: "250.000đ",
    oldPrice: "400.000đ",
    sold: 78,
  },
  {
    image: img5,
    title: "Sữa Rửa Mặt Dành Cho Da Dầu CeraVe Foaming Cleanser ",
    price: "150.000đ-289.000đ",
    oldPrice: "200.000đ-322.000đ",
    sold: 98,
  },
  {
    image: img4,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "150.000đ",
    oldPrice: "230.000đ",
    sold: 78,
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: "300.000đ",
    oldPrice: "500.000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "100.000đ-250.000đ",
    oldPrice: "200.000đ-432.000đ",
    sold: 45,
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: "250.000đ",
    oldPrice: "400.000đ",
    sold: 78,
  },
  {
    image: img5,
    title: "Sữa Rửa Mặt Dành Cho Da Dầu CeraVe Foaming Cleanser ",
    price: "150.000đ-289.000đ",
    oldPrice: "200.000đ-322.000đ",
    sold: 98,
  },
  {
    image: img4,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "150.000đ",
    oldPrice: "230.000đ",
    sold: 78,
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: "300.000đ",
    oldPrice: "500.000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "100.000đ-250.000đ",
    oldPrice: "200.000đ-432.000đ",
    sold: 45,
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: "250.000đ",
    oldPrice: "400.000đ",
    sold: 78,
  },
  {
    image: img5,
    title: "Sữa Rửa Mặt Dành Cho Da Dầu CeraVe Foaming Cleanser ",
    price: "150.000đ-289.000đ",
    oldPrice: "200.000đ-322.000đ",
    sold: 98,
  },
  {
    image: img4,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "150.000đ",
    oldPrice: "230.000đ",
    sold: 78,
  },
];

export default function Makeup() {
  const [title, setTitle] = useState("Tất cả sản phẩm");
  return (
    <div>
      <Header path1={"Sản phẩm"} path2={"Trang điểm"} />
      <div className="flex mx-[85px] mt-[45px]">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="text-[40px] text-[#E45C81]">Trang điểm</h3>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-[24px]">
                <span className="font-medium">Sắp xếp:</span>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-[#FDD2DB] text-black py-1 px-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-300">
                    <option value="default">Mặc định</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="popularity">Phổ biến</option>
                  </select>
                  <span className="absolute block w-4 h-4 inset-y-0 top-3 right-4 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-[30px] mb-[34px]">
            {products.map((product, index) => (
              <Product
                image={product.image}
                title={product.title}
                price={product.price}
                sold={product.sold}
                oldPrice={product.oldPrice}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mb-[30px]">
            <img src={paginate} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
