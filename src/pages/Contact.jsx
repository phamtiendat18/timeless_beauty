import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contact1 from "../assets/images/contact1.png";
import contact2 from "../assets/images/contact2.png";

export default function Contact() {
  return (
    <div>
      <Header path1={"Liên hệ"} />
      <div>
        <div className="flex justify-center mt-[34px]">
          <img src={contact1} alt="" />
        </div>
        <div className="flex justify-center my-[25px]">
          <img src={contact2} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
