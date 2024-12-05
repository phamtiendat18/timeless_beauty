import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../components/Header";
import Product from "../components/Product";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import brand from "../assets/images/brand.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import newsImg1 from "../assets/images/news-img-1.png";
import newsImg2 from "../assets/images/news-img-2.png";
import newsImg3 from "../assets/images/news-img-3.png";
import { Carousel, Flex } from "antd";
import News from "../components/News";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Footer from "../components/Footer";

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
];

const news = [
  {
    img: newsImg1,
    title: "4 BƯỚC CHE QUẦNG THÂM BỌNG MẮT CỰC ĐƠN GIẢN",
    des: "Tình trạng bọng mắt to, quầng thâm đậm ảnh hưởng trực tiếp đến nhan sắc khiến chị em thiếu tự tin trong cuộc sống ? Bạn sẽ trông già hơn thiếu sức sống ?... ",
    time: "25/11/2024",
  },
  {
    img: newsImg2,
    title: `HỌC LỎM "NIGHT ROUNTINE" CHĂM DA CỦA TỶ TỶ DOUYIN`,
    des: `Có thể nàng chưa biết chăm sóc làn da vào buổi tối không thể thiếu nếu nàng muốn có một làn da khỏe mạnh, rạng rỡ sau một ngày dài mệt mỏi...`,
    time: "20/11/2024",
  },
  {
    img: newsImg3,
    title: "Nên bôi kem trị mụn trước hay sau kem chống nắng?",
    des: "Khi chăm sóc da, nhiều người thắc mắc bôi kem trị mụn trước hay sau kem chống nắng. Việc hiểu rõ thứ tự này không chỉ giúp tối ưu hiệu quả ...",
    time: "11/11/2024",
  },
];

export default function Home() {
  return (
    <div>
      <Header path1={"Trang chủ"} />
      <Carousel autoplay dots={false}>
        <div className="w-full">
          <img src={banner1} className="w-full" alt="" />
        </div>
        <div className="w-full">
          <img src={banner2} className="w-full" alt="" />
        </div>
      </Carousel>
      <div className=" mb-[33px] mx-[85px]">
        <div>
          <div className="bg-[#FEECF0] h-[82px] flex justify-center items-center my-[33px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Khuyến mãi hấp dẫn
            </h2>
          </div>
          <div className="">
            <Swiper
              modules={[Navigation, Pagination]} // Thêm modules ở đây
              navigation
              pagination={false}
              spaceBetween={20}
              slidesPerView={5}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <Product
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    sold={product.sold}
                    oldPrice={product.oldPrice}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          <div className="bg-[#FEECF0] h-[82px] flex justify-center items-center my-[33px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Sản phẩm bán chạy
            </h2>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]} // Thêm modules ở đây
          navigation
          pagination={false}
          spaceBetween={20}
          slidesPerView={5}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Product
                image={product.image}
                title={product.title}
                price={product.price}
                sold={product.sold}
                oldPrice={product.oldPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="bg-[#FEECF0] h-[82px] flex justify-center items-center my-[33px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Hàng mới về
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination]} // Thêm modules ở đây
            navigation
            pagination={false}
            spaceBetween={20}
            slidesPerView={5}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Product
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  sold={product.sold}
                  oldPrice={product.oldPrice}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mb-[33px]">
          <div className=" flex justify-center items-center my-[23px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Thương hiệu nổi bật
            </h2>
          </div>
          <div className="flex w-full flex-nowrap justify-between">
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand2} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand4} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand3} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center my-[33px] mx-[85px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Tin tức nổi bật
            </h2>
          </div>
          <div className="flex justify-between">
            {news.map((i) => {
              return (
                <News img={i.img} title={i.title} des={i.des} time={i.time} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
