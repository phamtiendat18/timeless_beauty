import React from "react";

export default function Product({
  image,
  title,
  price,
  sold,
  rating,
  oldPrice,
}) {
  return (
    <div className="w-[230px] h-[372px]">
      <div className="bg-white border-[#F88CAD] shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-[228px] object-cover"
        />
        <div className="p-3">
          <h3 className="text-[15px] font-[500] text-gray-800 text-left">
            {title}
          </h3>
          <p className="text-[13px] font-[400] text-lg line-through text-center">
            {oldPrice}
          </p>
          <p className="text-red-500 font-[400] text-[16px] text-center">
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
              <div>Đã bán: {sold ? sold : "0"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
