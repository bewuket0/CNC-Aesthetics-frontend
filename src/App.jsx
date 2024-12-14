import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Test from "./pages/test";
import Home from "./pages/user/Home";
import Notfound from "./pages/Notfound";
import Layout from "./pages/user/Layout";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import ProductDetail from "./pages/user/ProductDetail";
import Category from "./pages/user/Category";
import Products from "./pages/user/Products";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/user/Cart";
import { AdminLayout } from "./pages/admin/Layout";
import Categories from "./pages/admin/Categories";
import Dashboard from "./pages/admin/Dashboard";
import DashProducts from "./pages/admin/Products";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#f6fbfe]">
        <BrowserRouter>
          <ToastContainer />
          <ScrollToTop />
          <Routes>
            <Route path="/admin/" element={<AdminLayout />}>
              <Route path="" element={<Dashboard />} />
              <Route path="categories" element={<Categories />} />
              <Route path="products" element={<DashProducts />} />
              {/* <Route path="products" element={<Categories />} /> */}
            </Route>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/categories" element={<Category />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/detail/:pcode"
                element={<ProductDetail />}
              />
              <Route path="/cart" element={<Cart />} />
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
