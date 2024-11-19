import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => (
  <div>
    <Navigation />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
