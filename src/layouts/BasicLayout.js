import Header from "../navigations/Header";
import Navbar from "../navigations/Navbar";
import Footer from "../navigations/Footer";
import Head from "../components/shared/Head";
import ServiceSlider from "../components/shared/slider/ServiceSlider";

const BasicLayout = ({ children, head }) => {
  return (
    <>
      <Head title={head ? head : "Medical"} />
      <Header />
      <Navbar />
      {children}
      <ServiceSlider />
      <Footer />
    </>
  );
};

export default BasicLayout;
