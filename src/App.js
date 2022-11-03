import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";

// components
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import BlogGrid from "./pages/BlogGrid";
import BlogList from "./pages/BlogList";
import SingleBlog from "./pages/SingleBlog";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog-grid" element={<BlogGrid />} />
      <Route path="blog-list" element={<BlogList />} />
      <Route exact path="blog-details">
        <Route path=":blogId" element={<SingleBlog />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
