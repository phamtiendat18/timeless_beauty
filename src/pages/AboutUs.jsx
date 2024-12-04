import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutimg from "../assets/images/aboutimg.png";

export default function AboutUs() {
  return (
    <div>
      <Header path1={"Giới thiệu"} />
      <div className="ml-[150px] mr-[170px]">
        <div className="w-full flex flex-col items-center mb-[20px]">
          <div className="w-fit flex flex-col items-center mb-[20px] mt-[34px]">
            <h2 className="uppercase text-[#E45C81] font-medium text-[32px] mb-[10px]">
              Về Chúng tôi
            </h2>
            <div className="w-[80%] h-[2px] bg-[#F88CAD]"></div>
          </div>
          <div className="flex border border-[#F88CAD] rounded-lg">
            <img src={aboutimg} alt="" className="w-[542px] h-[380px]" />
            <div className="px-[15px] py-[30px] text-[20px] leading-10">
              Phương châm của Timeless Beauty là "Vẻ đẹp tự nhiên, bền vững".
              Chúng tôi tin rằng vẻ đẹp không chỉ đến từ bề ngoài mà còn từ sự
              chăm sóc và nuôi dưỡng làn da từ bên trong.
              <br />
              Chúng tôi cam kết cung cấp các sản phẩm không chỉ giúp cải thiện
              vẻ đẹp bên ngoài mà còn an toàn cho sức khỏe và môi trường.
              Timeless Beauty không ngừng nỗ lực để mang lại những sản phẩm tốt
              nhất cho khách hàng, với mục tiêu giúp mọi người tự tin tỏa sáng
              với vẻ đẹp tự nhiên của mình.
            </div>
          </div>
        </div>
        <div className="text-center w-full flex flex-col items-center mb-[24px]">
          <div className="w-fit flex flex-col items-center mb-[20px] mt-[34px]">
            <h2 className=" text-[#E45C81] font-medium text-[32px] mb-[10px]">
              Phát Triển Bền Vững Của Chúng Tôi
            </h2>
            <div className="w-[80%] h-[2px] bg-[#F88CAD]"></div>
          </div>
          <div className="text-[24px] leading-10 text-left pl-[10px]">
            Chung tay với Quý khách hàng, chúng tôi muốn truyền cảm hứng toàn
            diện về sự cân bằng thể chất - tinh thần, sự tích cực trong cuộc
            sống, và những hành động thể hiện sự quan tâm và tử tế đến với những
            người xung quanh, với cộng đồng và với hành tinh này. Chúng tôi đã
            và đang được hiện thực hóa sứ mệnh này thông qua 3 mục tiêu chính
            trong chương trình phát triển bền vững ở thị trường Châu Á.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
