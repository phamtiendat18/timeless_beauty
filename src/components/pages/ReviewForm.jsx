import { useState } from "react";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold ">VIẾT NHẬN XÉT CỦA BẠN VỀ SẢN PHẨM</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[17px] mb-10 w-[646px] ">
          <div className="">
            <label className="block text-[22px]">Tên của bạn</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-[#F88CAD] outline-0 rounded w-full"
              placeholder="Nhập tên của bạn (*)"
            />
          </div>
          <div className=" flex text-[22px] items-center">
            <div className="text-[22px]">Chất lượng sản phẩm</div>
            <div className="ml-2 flex mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-[24px] w-[24px] ml-1 text-[#FFCE31]"
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
            <div className="text-[#FFCE31] text-[16px]">Tuyệt vời</div>
          </div>
          <div className="block text-[22px]">Nội dung đánh giá</div>
          <div className=" border border-[#F88CAD] rounded-[6px] px-[27px] py-[13px]">
            <div className="mb-4">
              <label htmlFor="" className="mr-[10px]">
                Mùi hương:
              </label>
              <input
                type="text"
                placeholder="..."
                className="outline-0 border-0 "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mr-[10px]">
                Dành cho da:
              </label>
              <input
                type="text"
                placeholder="..."
                className="outline-0 border-0 "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mr-[10px]">
                Công dụng:
              </label>
              <input
                type="text"
                placeholder="..."
                className="outline-0 border-0 "
              />
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 p-2 outline-0 border-t-2 border-[#827E7E] w-full h-[70px]"
              placeholder="Hãy chia sẻ nhận xét cho sản phẩm này bạn nhé (*)"
            />
          </div>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="bg-[#F88CAD] text-white p-2 rounded-[6px] w-[450px] h-[50px]"
          >
            GỬI THÔNG TIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
