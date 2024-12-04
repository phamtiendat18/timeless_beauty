import React from "react";
import newsImg1 from "../assets/images/news-img-1.png";
import newsImg2 from "../assets/images/news-img-2.png";
import newsImg3 from "../assets/images/news-img-3.png";
import paginate from "../assets/images/paginate.png";
import News from "../components/News";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
    time: "10/11/2024",
  },
  {
    img: newsImg1,
    title: "4 BƯỚC CHE QUẦNG THÂM BỌNG MẮT CỰC ĐƠN GIẢN",
    des: "Tình trạng bọng mắt to, quầng thâm đậm ảnh hưởng trực tiếp đến nhan sắc khiến chị em thiếu tự tin trong cuộc sống ? Bạn sẽ trông già hơn thiếu sức sống ?... ",
    time: "25/11/2024",
  },
  {
    img: newsImg3,
    title: "Nên bôi kem trị mụn trước hay sau kem chống nắng?",
    des: "Khi chăm sóc da, nhiều người thắc mắc bôi kem trị mụn trước hay sau kem chống nắng. Việc hiểu rõ thứ tự này không chỉ giúp tối ưu hiệu quả ...",
    time: "18/11/2024",
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

export default function NewsPage() {
  return (
    <div>
      <Header path1={"Tin tức"} />
      <div className="flex flex-col items-center">
        <div className="w-fit flex flex-col items-center my-[50px] mt-[34px]">
          <h2 className="uppercase text-[#E45C81] font-medium text-[32px] mb-[10px]">
            Tin tức
          </h2>
          <div className="w-[90%] h-[2px] bg-[#F88CAD]"></div>
        </div>
        <div className="flex justify-between flex-wrap mx-[85px] gap-y-[50px] mb-[50px]">
          {news.map((i) => {
            return (
              <News img={i.img} title={i.title} des={i.des} time={i.time} />
            );
          })}
        </div>
        <div className="w-full flex justify-center mb-[45px]">
          <img src={paginate} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
