import React from "react";
import Checkout from "../components/pages/Checkout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Payment() {
  return (
    <div>
      <Header path1={"Giỏ hàng"} path2={"Thanh toán"} />
      <Checkout />
      <Footer />
    </div>
  );
}
