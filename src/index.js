import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import App from "./App";

import "./assets/styles/global.css";
import "./assets/styles/buttons.css";
import "./assets/styles/animations.css";
import "./assets/styles/navigations.css";
import "./assets/styles/swiperSlider.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <App />
    </BrowserRouter>
  </StrictMode>
);
