import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/store/store";

const Navigation = () => {
  // const [cartCount, setCartCount] = useState(0); // Example cart count
  const cartItems = useStore((state) => state.cartItems);

  let cartCount = cartItems.length;
  return (
    // bg-custom-primary  // bg-navy-blue
    // <header className="border border-b py-4 text-custom-primary">
    <header className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="text-xl font-bold text-custom-primary">
          Logo
        </Link>
        {/* <nav className="hidden space-x-12 md:flex">
          <Link href="/" className="transition-colors hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-gray-300">
            Products
          </Link>
          <Link href="/about" className="transition-colors hover:text-gray-300">
            Category
          </Link>
          <Link href="/about" className="transition-colors hover:text-gray-300">
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-gray-300"
          >
            Contact Us
          </Link>
        </nav> */}
        {/* <div className="flex flex-row items-center space-x-4">
           <input
            type="search"
            className="w-[500px] rounded-md border p-2 outline-none focus:border"
            name=""
            placeholder="Search Products ..."
            id=""
          /> 
          <p>search</p>
        </div> */}
        <div className="flex flex-row space-x-4">
          {/* <Link
            className="transition-colors hover:text-sky-700"
            to={"/products"}
          >
            Products{" "}
          </Link>
          <Link
            className="transition-colors hover:text-sky-700"
            to={"/categories"}
          >
            Categories{" "}
          </Link> */}
        </div>
        {/* <nav className="flex justify-end bg-white p-4 shadow-md"> */}
        {/* </nav> */}
        <div className="flex flex-row items-center space-x-5">
          {/* <User className="h-6 w-6" /> */}
          <Link to={"/cart"} className="relative">
            <ShoppingCart className="h-7 w-7 text-gray-700 hover:text-sky-700" />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* <Link
            to={"/cart"}
            className="transition-colors hover:text-sky-700"
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link> */}
          {/* <Link
            className="rounded-full p-2 transition-colors hover:bg-blue-800"
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          <Link to={"#"}>signin</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
