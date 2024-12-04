import React from "react";
import Header from "./Header";
import footer from "../assets/images/footer.png";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <div>
        <img src={footer} className="w-full" alt="" />
      </div>
    </div>
  );
}
