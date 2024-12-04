import React, { useState } from "react";
import evaluate from "../../assets/images/evaluate.png";
import ReviewForm from "./ReviewForm";

const reviews = [
  {
    name: "C Hoang Anh",
    date: "21:06 | 11/11/2024",
    type: "Phân loại 236ml",
    rating: 5,
    comment:
      "Mình da cực kỳ dầu nhưng khi rửa xong thấy có độ ẩm khá là thích, không mùi gắt hay nồng như mấy sp khác mà mùi sữa nhẹ, rất ok",
  },
  {
    name: "Huỳnh Thi",
    date: "15:20 | 9/11/2024",
    type: "Phân loại 88ml",
    rating: 5,
    comment:
      "Bản thân mình da dầu dễ lên mụn từ nhưng từ khi dùng sữa rửa mặt mụn có giảm bớt, độ ph lý tưởng, bác sĩ khuyên dùng",
  },
  {
    name: "Phương Anh",
    date: "19:00 | 9/11/2024",
    type: "Phân loại 473ml",
    rating: 5,
    comment:
      "Mình dùng qua nhiều loại srm nhưng ko tìm dc chân ái,từ khi dùng srm này da mình ko bị tình trạng bong tróc, rửa xong da mịn màng",
  },
];

const ProductReviews = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">ĐÁNH GIÁ SẢN PHẨM</h2>
          <div className="text-pink-500 text-2xl mb-2">4.9 trên 5</div>
          <div className="flex mb-4">
            <button className="mr-2">5 Sao</button>
            <button className="mr-2">4 Sao</button>
            <button className="mr-2">3 Sao</button>
            <button className="mr-2">2 Sao</button>
            <button className="mr-2">1 Sao</button>
          </div>
          <img src={evaluate} alt="" />
        </div>
        <ReviewForm />
      </div>
    </div>
  );
};

export default ProductReviews;
