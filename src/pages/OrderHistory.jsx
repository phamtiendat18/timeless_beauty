import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuUser from "../components/MenuUser";
import ProductPaid from "../components/ProductPaid";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";

const products = [
  {
    image: img1,
    title: "Serum Torrien DIVE IN chứa Hyaluronic Acid",
    price: 200,
    oldPrice: 300,
    sold: 120,
    quantity: 2,
    type: "200ml",
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: 300,
    oldPrice: 500,
    sold: 85,
    quantity: 1,
    type: "100ml",
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: 250,
    oldPrice: 400,
    sold: 78,
    quantity: 1,
    type: "250ml",
  },
  {
    image: img4,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: 150,
    oldPrice: 230,
    sold: 78,
    quantity: 3,
    type: "100ml",
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: 300,
    oldPrice: 500,
    sold: 85,
    quantity: 1,
    type: "300ml",
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: 250,
    oldPrice: 400,
    sold: 78,
    quantity: 2,
    type: "250ml",
  },
  {
    image: img4,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: 150,
    oldPrice: 230,
    sold: 78,
    quantity: 1,
    type: "350ml",
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: 300,
    oldPrice: 500,
    sold: 85,
    quantity: 4,
    type: "150ml",
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: 250,
    oldPrice: "400.000đ",
    sold: 78,
    quantity: 1,
    type: "250ml",
  },
  {
    image: img4,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: 150,
    oldPrice: 230,
    sold: 78,
    quantity: 2,
    type: "500ml",
  },
];

export default function OrderHistory() {
  return (
    <div>
      <Header path1={"Tài khoản"} path2={"Lịch sử mua hàng"} />
      <div className="flex mt-[73px] mb-[45px] mx-[85px]">
        <MenuUser number={3} />
        <div className="shadow-lg ml-[26px]">
          <div className="pl-[34px] py-[15px] text-[28px] text-[#E45C81] uppercase font-semibold border-b-2 border-[#F88CAD]">
            Đơn hàng đã mua
          </div>
          <div className="overflow-y-scroll max-h-[860px] px-[50px]">
            {products.map((item, index) => (
              <ProductPaid
                img={item?.image}
                title={item?.title}
                oldPrice={item.oldPrice}
                price={item.price}
                quantity={item.quantity}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
