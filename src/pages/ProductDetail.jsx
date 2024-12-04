import React from "react";
import ProductDescription from "../components/pages/ProductDescription";
import ProductReviews from "../components/pages/ProductReviews";
import ReviewForm from "../components/pages/ReviewForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetails from "../components/pages/ProductDetails";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import Product from "../components/Product";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import { Navigation, Pagination } from "swiper/modules";

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
];

export default function ProductDetail() {
  return (
    <div className="mx-[70px]">
      <Header
        path1={"Sản phẩm"}
        path2={"Chăm sóc da"}
        path3={"Sữa Rửa Mặt Dành Cho Da Dầu CeraVe Foaming Cleanser"}
      />
      <div>
        <ProductDetails />
        <ProductDescription />
        <ProductReviews />
        <div className="mb-[33px]">
          <div className="flex justify-center items-center mb-[33px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              SẢN PHẨM TƯƠNG TỰ
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
