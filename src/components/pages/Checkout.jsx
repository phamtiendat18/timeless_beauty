import { Button, Input, Popconfirm, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

import img1 from "../../assets/images/img-prod-1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import img5 from "../../assets/images/image5.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const isLogin = localStorage.getItem("isLogin");
  const [shippingInfo, setShippingInfo] = useState({
    name: "Đỗ Thị Loan",
    phone: "0353341841",
    email: "loan@gmail.com",
    address: "số 326 đường Giáp Bát",
    province: "Hà Nội",
    district: "Hoàng Mai",
    commune: "Giáp Bát",
    notes: "",
  });
  const [cart, setCart] = useState([
    {
      id: 2,
      name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu Hỗn Hợp",
      image: img2,
      type: "500ml",
      price: 70000,
      oldPrice: 120000,
      quantity: 2,
    },
    {
      id: 3,
      name: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
      image: img4,
      type: "130ml",
      price: 100000,
      oldPrice: 178000,
      quantity: 1,
    },
  ]);

  const navigation = useNavigate();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const totalPrice = selectedRowKeys.reduce((total, id) => {
    const product = cart.find((item) => item.id === id);
    return total + (product?.price || 0) * (product?.quantity || 1);
  }, 0);

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center justify-center py-3">
          <img
            src={record.image}
            alt={text}
            className="w-[100px] h-[100px] object-cover rounded"
          />
          <div className="pl-4">
            <div className=" max-w-[282px] text-[20px] text-left font-medium">
              {text}
            </div>
            <div className="text-left">Phân loại: {record?.type}</div>
          </div>
        </div>
      ),
      align: "center",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div className="flex items-center justify-center">
          <span className="w-8 text-center text-[25px]">{quantity}</span>
        </div>
      ),
      align: "center",
    },
    {
      title: "Thành tiền",
      key: "total",
      render: (_, record) => (
        <span className=" text-[25px]">
          {(record.price * record.quantity).toLocaleString()}đ
        </span>
      ),
      align: "center",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <div className="w-fit flex flex-col items-center mb-[45px] mt-[34px] m-auto">
        <h2 className="uppercase text-[#E45C81] font-medium text-[32px] mb-[10px]">
          Thanh toán
        </h2>
        <div className="w-[80%] h-[2px] bg-[#F88CAD]"></div>
      </div>
      <div className="mx-[88px] mb-[50px]">
        <h1 className="text-[30px] font-bold mb-6 text-[#F88CAD]">
          Thông tin vận chuyển
        </h1>
        <div className="flex">
          <div className="max-w-xl mx-auto max-w-[500px] text-[20px]">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-full text-[18px]"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="mb-4 flex justify-between">
                <Input
                  type="text"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-[45%] text-[18px]"
                  placeholder="Số điện thoại"
                />
                <Input
                  type="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-[45%] text-[18px]"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 flex justify-between">
                <Input
                  type="text"
                  name="province"
                  value={shippingInfo.province}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-[45%] text-[18px]"
                  placeholder="Tỉnh/ Thành phố"
                />
                <Input
                  type="text"
                  name="district"
                  value={shippingInfo.district}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-[45%] text-[18px]"
                  placeholder="Quận/ Huyện"
                />
              </div>
              <div className="flex justify-between mb-4">
                <Input
                  type="text"
                  name="commune"
                  value={shippingInfo.commune}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-[45%] text-[18px]"
                  placeholder="Phường/ Xã"
                />
                <Input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-[45%] text-[18px]"
                  placeholder="Địa chỉ cụ thể"
                />
              </div>
              <div className="mb-4">
                <TextArea
                  name="notes"
                  value={shippingInfo.notes}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl w-full text-[18px]"
                  placeholder="Ghi chú thêm"
                />
              </div>
            </form>

            <h1 className="text-[30px] font-bold mt-8 mb-[25px] text-[#F88CAD]">
              Hình thức thanh toán
            </h1>
            <div className="flex flex-col gap-[20px]">
              <div className="mb-4 flex items-center justify-between">
                <input
                  type="radio"
                  name="payment"
                  className="accent-[#E45C81] w-[30px] h-[30px]"
                  id="zalopay"
                  value="zalopay"
                />
                <label
                  htmlFor="zalopay"
                  className="border border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] ml-5 block w-[450px] h-[50px] px-3 flex items-center rounded-[6px] hover:shadow-lg"
                >
                  Thanh toán bằng ví điện tử (Zalopay, Momo)
                </label>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <input
                  type="radio"
                  name="payment"
                  className="accent-[#E45C81] w-[30px] h-[30px]"
                  id="cod"
                  value="cod"
                  checked
                />
                <label
                  htmlFor="cod"
                  className="border border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] ml-5 block w-[450px] h-[50px] px-3 flex items-center rounded-[6px] hover:shadow-lg"
                >
                  Thanh toán khi nhận hàng
                </label>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <input
                  type="radio"
                  name="payment"
                  className="accent-[#E45C81] w-[30px] h-[30px]"
                  id="credit_card"
                  value="credit_card"
                />
                <label
                  htmlFor="credit_card"
                  className="border border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] ml-5 block w-[450px] h-[50px] px-3 flex items-center rounded-[6px] hover:shadow-lg"
                >
                  Thanh toán bằng thẻ tín dụng, thẻ ghi nợ
                </label>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <input
                  type="radio"
                  name="payment"
                  className="accent-[#E45C81] w-[30px] h-[30px]"
                  id="bank_transfer"
                  value="bank_transfer"
                />
                <label
                  htmlFor="bank_transfer"
                  className="border border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] ml-5 block w-[450px] h-[50px] px-3 flex items-center rounded-[6px] hover:shadow-lg"
                >
                  Thanh toán bằng chuyển khoản ngân hàng
                </label>
              </div>
            </div>
            <div>
              <h1 className="text-[30px] mb-[17px]">Lời nhắn</h1>
              <TextArea
                name="note"
                value={shippingInfo.notes}
                onChange={handleInputChange}
                className="mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] w-full h-[142px] shadow-xl"
                placeholder="Lưu ý cho người bán"
                style={{ height: "142px" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <Table
                rowKey="id"
                dataSource={cart}
                columns={columns}
                pagination={false}
              />
              <div className="container mx-auto p-8">
                <div className="border border-t-[#EC778B] border-b-[#EC778B] border-x-0 mb-[30px] pt-[40px]">
                  <div className="text-[32px] mb-[24px]">Voucher</div>
                  <div className="flex justify-between text-[25px] mb-[30px]">
                    <Input
                      placeholder="Nhập mã voucher"
                      className="w-[300px] h-[60px] mt-1 p-2 border-[#F88CAD] hover:border-[#F88CAD] focus:border-[#F88CAD] shadow-xl text-[25px]"
                    />
                    <Button
                      type="primary"
                      className="bg-[#F88CAD] w-[400px] h-[60px] text-[25px] hover:bg-[#F88CAD]"
                      style={{ background: "#F88CAD" }}
                    >
                      Áp dụng
                    </Button>
                  </div>
                  <div className="flex justify-between text-[25px] mb-[30px]">
                    <div>Tổng tiền hàng (2 sản phẩm)</div>
                    <div>140.000đ</div>
                  </div>
                  <div className="flex justify-between text-[25px] mb-[30px]">
                    <div>Giảm giá</div>
                    <div>0đ</div>
                  </div>
                  <div className="flex justify-between text-[25px] mb-[30px]">
                    <div>Phí vận chuyển</div>
                    <div>20.000đ</div>
                  </div>
                </div>
                <div className="flex justify-between text-[25px] mb-[22px]">
                  <div>Tổng thanh toán</div>
                  <div>160.000đ</div>
                </div>
                <div className="flex justify-between text-[25px]">
                  <Button
                    className="text-[#F88CAD] text-[28px] border border-[#F88CAD] hover:border-[#F88CAD] h-[60px]"
                    style={{
                      background: "#FFF",
                      color: "#F88CAD",
                      border: "0",
                    }}
                    onClick={() => navigation("/cart")}
                  >
                    Quay lại giỏ hàng
                  </Button>
                  <Button
                    color="primary"
                    className="bg-[#F88CAD] text-white text-[28px] hover:bg-[#F88CAD] w-[400px] h-[60px]"
                    style={{
                      background: "#F88CAD",
                      color: "white",
                      border: "1px solid #F88CAD",
                    }}
                    onClick={() => {
                      if (isLogin) {
                        return navigation("/cart/payment-success");
                      }
                      navigation("/login");
                    }}
                  >
                    Hoàn tất thanh toán
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
