import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Test from "./pages/test";
import Home from "./pages/user/Home";
import Notfound from "./pages/Notfound";
import Layout from "./pages/user/Layout";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import ProductDetail from "./pages/user/ProductDetail";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#f6fbfe]">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />
              <Route
                path="/products/detail/:pcode"
                element={<ProductDetail />}
              />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>

        {/* <Test></Test> */}
      </div>
    </>
  );
}

export default App;
