import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({
  image,
  title,
  price,
  sold,
  rating,
  oldPrice,
}) {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/products/product-detail");
  };
  return (
    <div className="w-[230px] h-[372px] ">
      <div className="bg-white border-[#F88CAD] overflow-hidden border hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
        <div className="hover:scale-105 " onClick={handleClick}>
          <img
            src={image}
            alt={title}
            className="w-full h-[228px] object-cover"
          />
          <div className="p-2">
            <p className="text-[15px] font-[500] text-gray-800 text-left">
              {title}
            </p>
            <p className="text-[14px] font-[400] text-lg line-through text-center">
              {oldPrice}
            </p>
            <p className="text-red-500 font-[400] text-[19px] text-center">
              {price}
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between text-sm text-gray-500 w-full">
                <div className="flex">
                  <span className="mr-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                        fill="gold"
                      />
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                        fill="gold"
                      />
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                        fill="gold"
                      />
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                        fill="gold"
                      />
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9"
                        fill="gold"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-[14px]">Đã bán: {sold ? sold : "0"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
