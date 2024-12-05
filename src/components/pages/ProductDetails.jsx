import imgProd from "../../assets/images/imgProd.png";
import shoppingIcon from "../../assets/images/shoppingIcon.png";
import sale from "../../assets/images/sale.png";
import QuantitySelector from "../QuantitySelector";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const ProductDetails = ({ src }) => {
  const navigation = useNavigate();
  return (
    <div className="flex mt-[60px] gap-[23px]">
      {/* Hình ảnh sản phẩm */}
      <div className="min-w-[515px]">
        <div>
          <img
            src={imgProd}
            alt="CeraVe Foaming Cleanser"
            className="rounded-lg shadow-lg w-[515px] h-[624px]"
          />
        </div>
      </div>

      {/* Chi tiết sản phẩm */}
      <div className="flex flex-col gap-[23px]">
        <h1 className="text-[36px] font-semibold">
          Sữa Rửa Mặt Giúp Làm Sạch Sâu Dành Cho Da Dầu CeraVe Foaming Cleanser
        </h1>
        <div className="text-sm  flex gap-x-[20px]">
          <div className="bg-[#FEECF0] px-[18px] py-[6px] rounded-[99px]">
            CeraVe
          </div>
          <div className="bg-[#FEECF0] px-[18px] py-[6px] rounded-[99px]">
            Sữa rửa mặt
          </div>
          <div className="bg-[#FEECF0] px-[18px] py-[6px] rounded-[99px]">
            Đã bán 998
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-2 flex mr-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-[30px] w-[30px] ml-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                  fill="gold"
                />
              </svg>
            ))}
          </div>
          <div className=" flex items-center text-white font-bold bg-[#F88CAD] px-[17px] justify-center text-[30px] font-normal rounded-[99px]">
            5.0
            <svg
              className="h-[30px] w-[30px] ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                fill="gold"
              />
            </svg>
          </div>
        </div>

        {/* Giá sản phẩm */}
        <div className="">
          <img src={sale} alt="" />
        </div>

        {/* Chọn loại và số lượng */}
        <div className="">
          <div className="text-[32px] font-medium">Phân loại</div>
          <div className="flex items-center">
            <div className="px-[12px] py-[11px] shadow-md border border-white rounded-[8px] mr-[30px] hover:border hover:border-[#F88CAD]">
              88ml
            </div>
            <div className="px-[12px] py-[11px] shadow-md border border-white rounded-[8px] mr-[30px] hover:border hover:border-[#F88CAD]">
              236ml
            </div>
            <div className="px-[12px] py-[11px] shadow-md border border-white rounded-[8px] mr-[30px] hover:border hover:border-[#F88CAD]">
              473ml
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" mr-[45px] text-[36px]">Số lượng</div>
          <QuantitySelector />
        </div>
        <div className="flex items-center space-x-4">
          <button
            className=" text-[#E45C81] px-[26px] py-[15px] rounded-[10px] flex items-center text-[30px] border border-[#F88CAD]"
            onClick={() =>
              notification.success({ message: "Thêm đơn hàng thành công!" })
            }
          >
            <img src={shoppingIcon} alt="" className="w-[40px] mr-2" />
            Thêm vào giỏ hàng
          </button>
          <button
            className="w-[350px] text-white bg-[#F88CAD] py-[15px] rounded-[10px] text-[30px] border border-[#F88CAD]"
            onClick={() => navigation("/cart/checkout")}
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
