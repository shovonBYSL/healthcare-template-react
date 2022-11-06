import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";

// global style files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// local style files
import "./assets/styles/global.css";
import "./assets/styles/buttons.css";
import "./assets/styles/animations.css";
import "./assets/styles/navigations.css";
import "./assets/styles/swiperSlider.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer theme="dark" />
      <App />
    </BrowserRouter>
  </StrictMode>
);
