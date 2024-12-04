import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 w-[126px] h-[38px]">
      {/* Nút giảm */}
      <button
        onClick={decreaseQuantity}
        className="w-[38px] h-[38px] flex items-center justify-center text-xl font-bold text-gray-700 border-r border-gray-300 hover:bg-gray-100"
      >
        -
      </button>

      {/* Hiển thị số lượng */}
      <div className="w-12 h-10 flex items-center justify-center text-[20px] font-normal">
        {quantity}
      </div>

      {/* Nút tăng */}
      <button
        onClick={increaseQuantity}
        className="w-[38px] h-[38px] flex items-center justify-center text-xl font-bold text-gray-700 border-l border-gray-300 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
