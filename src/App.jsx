import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Test from "./pages/test";
import Home from "./pages/user/Home";
import Notfound from "./pages/Notfound";
import Layout from "./pages/user/Layout";
// import { Outlet } from "react-router-dom";

const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;
// const Layout = () => (
//   <div>
//     <div className="border p-10">header</div>
//     <main>
//       <Outlet />
//     </main>{" "}
//   </div>
// );
function App() {
  return (
    <>
      <div className="min-h-screen bg-custom-bg">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />
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
