import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto"; // Mặc định trọng số 400
import "@fontsource/roboto/500.css"; // Import trọng số 500
import "@fontsource/roboto/700.css"; // Import trọng số 700
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Payment from "./pages/Payment.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Information from "./pages/Information.jsx";
import MyOrder from "./pages/MyOrder.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import Skincare from "./pages/Skincare.jsx";
import Makeup from "./pages/Makeup.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/skincare",
    element: <Skincare />,
  },
  {
    path: "/products/make-up",
    element: <Makeup />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/products/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/cart/checkout",
    element: <Payment />,
  },
  {
    path: "/cart/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/me/information",
    element: <Information />,
  },
  {
    path: "/me/my-order",
    element: <MyOrder />,
  },
  {
    path: "/me/order-history",
    element: <OrderHistory />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
