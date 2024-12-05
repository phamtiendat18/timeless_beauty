import React, { useState } from "react";
import { Table, Button, Popconfirm } from "antd";
import delIcon from "../assets/images/del-icon.png";
import img1 from "../assets/images/img-prod-1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: img1,
    title: "Serum Torrien DIVE IN chứa Hyaluronic Acid",
    price: "200.000đ",
    oldPrice: "300.000đ",
    sold: 120,
  },
  {
    image: img2,
    title: "Phấn Nước Cushion Clio Kill Cover Mesh Glow SPF50++15g",
    price: "300.000đ",
    oldPrice: "500.000đ",
    sold: 85,
  },
  {
    image: img3,
    title: "Kem Nền Freshian Thuần Chay Căng Bóng SPF35 PA++ 30ml",
    price: "100.000đ-250.000đ",
    oldPrice: "200.000đ-432.000đ",
    sold: 45,
  },
  {
    image: img4,
    title: "Kem Nền Maybelline Mỏng Nhẹ Kiềm Dầu Chống Nắng",
    price: "250.000đ",
    oldPrice: "400.000đ",
    sold: 78,
  },
  {
    image: img5,
    title: "Sữa Rửa Mặt Dành Cho Da Dầu CeraVe Foaming Cleanser ",
    price: "150.000đ-289.000đ",
    oldPrice: "200.000đ-322.000đ",
    sold: 98,
  },
];

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Sữa Rửa Mặt Dành Cho Da Dầu CeraVe Foaming Cleanser",
      image: img5,
      type: "200ml",
      price: 150000,
      oldPrice: 250000,
      quantity: 1,
    },
  ]);

  const navigation = useNavigate();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Xử lý tăng/giảm số lượng
  const handleQuantityChange = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Xử lý xóa sản phẩm
  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setSelectedRowKeys((prev) => prev.filter((key) => key !== id)); // Xóa khỏi danh sách được chọn
  };

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
            className="w-[120px] h-[120px] object-cover rounded"
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
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <>
          <span className="line-through mr-2 text-[#827E7E]">
            {record?.oldPrice.toLocaleString()}đ
          </span>
          <span className=" text-[25px]">
            {record?.price.toLocaleString()}đ
          </span>
        </>
      ),
      align: "center",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div className="flex items-center justify-center">
          <Button
            onClick={() => handleQuantityChange(record.id, -1)}
            size="small"
            className="mr-2"
            disabled={quantity === 1}
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            onClick={() => handleQuantityChange(record.id, 1)}
            size="small"
            className="ml-2"
          >
            +
          </Button>
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
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Bạn có chắc muốn xóa sản phẩm này?"
          onConfirm={() => handleDelete(record.id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <button>
            <img src={delIcon} className="w-[26px]" alt="" />
          </button>
        </Popconfirm>
      ),
      align: "center",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  return (
    <div>
      <Header path1={"Giỏ hàng"} />
      <div className="px-[80px] min-h-screen mb-[40px]">
        <div className="w-fit flex flex-col items-center mb-[45px] mt-[34px] m-auto">
          <h2 className="uppercase text-[#E45C81] font-medium text-[32px] mb-[10px]">
            Giỏ hàng
          </h2>
          <div className="w-[80%] h-[2px] bg-[#F88CAD]"></div>
        </div>
        <Table
          rowKey="id"
          dataSource={cart}
          columns={columns}
          rowSelection={rowSelection}
          pagination={false}
          className="custom-table"
        />
        <div className="mt-4 text-right bg-white">
          <div className="text-lg font-semibold text-[28px] mb-[40px]">
            Tổng tiền:{" "}
            <span className="ml-[150px]">{totalPrice.toLocaleString()}đ</span>
          </div>
          <Button
            type="primary"
            size="large"
            style={{
              background: "#F88CAD",
              width: "394px",
              height: "60px",
              color: "white",
              fontSize: "30px",
            }}
            className={`${selectedRowKeys.length === 0 && "disable-button"}`}
            disabled={selectedRowKeys.length === 0}
            onClick={() => navigation("/cart/checkout")}
          >
            Thanh toán
          </Button>
        </div>
        <div className="mb-[33px] mt-[43px]">
          <div className="flex justify-center items-center mb-[33px]">
            <h2 className="uppercase text-[40px] text-[#E45C81] font-bold">
              SẢN PHẨM TƯƠNG TỰ
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
            {products.map((product, index) => (
              <Product
                image={product.image}
                title={product.title}
                price={product.price}
                sold={product.sold}
                oldPrice={product.oldPrice}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
