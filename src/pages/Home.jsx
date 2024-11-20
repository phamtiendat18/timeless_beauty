import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../components/Header";
import Product from "../components/Product";
import img1 from "../assets/images/img-prod-1.png";
import footer from "../assets/images/footer.png";
import banner from "../assets/images/banner.png";
import brand from "../assets/images/brand.png";
import newsImg from "../assets/images/news-img.png";
import { Carousel, Flex } from "antd";
import News from "../components/News";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const products = [
  {
    image: img1,
    title: "Sản phẩm 1",
    price: "200.000đ",
    oldPrice: "1000đ",
    sold: 120,
  },
  {
    image: img1,
    title: "Sản phẩm 2",
    price: "300.000đ",
    oldPrice: "1000đ",
    sold: 85,
  },
  {
    image: img1,
    title: "Sản phẩm 3",
    price: "100.000đ",
    oldPrice: "1000đ",
    sold: 45,
  },
  {
    image: img1,
    title: "Sản phẩm 4",
    price: "250.000đ",
    oldPrice: "1000đ",
    sold: 78,
  },
  {
    image: img1,
    title: "Sản phẩm 5",
    price: "150.000đ",
    oldPrice: "1000đ",
    sold: 98,
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[62px] flex items-center pl-[85px] bg-[#FEECF0]">
        <p className="text-[18px]">
          Trang chủ &gt;&gt;{" "}
          <span className="text-[#E45C81] font-bold">Trang chủ</span>{" "}
        </p>
      </div>
      <div className="w-full">
        <img src={banner} className="w-full" alt="" />
      </div>
      <div className=" mb-[33px]">
        <div>
          <div className="bg-[#FEECF0] h-[82px] flex justify-center items-center my-[33px] mx-[85px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Khuyến mãi hấp dẫn
            </h2>
          </div>
          <div className="flex gap-[20px] flex-nowrap">
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
          </div>
        </div>
        <div>
          <div className="bg-[#FEECF0] h-[82px] flex justify-center items-center my-[33px] mx-[85px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Khuyến mãi hấp dẫn
            </h2>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]} // Thêm modules ở đây
          navigation
          pagination={false}
          spaceBetween={20}
          slidesPerView={4}
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
          <div className="bg-[#FEECF0] h-[82px] flex justify-center items-center my-[33px] mx-[85px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Hàng mới về
            </h2>
          </div>
          <div className="flex gap-[20px] flex-nowrap">
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
            <Product
              image={img1}
              oldPrice={"254.000đ - 458.000đ"}
              price={"200.000đ - 400.000đ"}
              rating={5}
              title={"Serum dưỡng ẩm số 1 sản xuất tại Việt Nam"}
            />
          </div>
        </div>
        <div className="mb-[33px] mx-[85px]">
          <div className=" flex justify-center items-center my-[23px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              Thương hiệu nổi bật
            </h2>
          </div>
          <div className="flex gap-[20px] flex-nowrap">
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
            </div>
            <div className="w-[230px] h-[130px]">
              <img src={brand} alt="" />
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
            <News
              img={newsImg}
              title="4 BƯỚC CHE QUẦNG THÂM BỌNG MẮT CỰC ĐƠN GIẢN"
              des="Tình trạng bọng mắt to, quầng thâm đậm ảnh hưởng trực tiếp đến nhan sắc khiến chị em thiếu tự tin trong cuộc sống ? Bạn sẽ trông già hơn thiếu sức sống ?... "
            />
            <News
              img={newsImg}
              title="4 BƯỚC CHE QUẦNG THÂM BỌNG MẮT CỰC ĐƠN GIẢN"
              des="Tình trạng bọng mắt to, quầng thâm đậm ảnh hưởng trực tiếp đến nhan sắc khiến chị em thiếu tự tin trong cuộc sống ? Bạn sẽ trông già hơn thiếu sức sống ?... "
            />
            <News
              img={newsImg}
              title="4 BƯỚC CHE QUẦNG THÂM BỌNG MẮT CỰC ĐƠN GIẢN"
              des="Tình trạng bọng mắt to, quầng thâm đậm ảnh hưởng trực tiếp đến nhan sắc khiến chị em thiếu tự tin trong cuộc sống ? Bạn sẽ trông già hơn thiếu sức sống ?... "
            />
          </div>
        </div>
      </div>
      <div>
        <img src={footer} className="w-full" alt="" />
      </div>
    </div>
  );
}
