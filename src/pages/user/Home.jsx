import React from "react";

import Navigation from "./Navigation";
import AccordionCard from "@/components/AccordionCard";
import ProductCard from "@/components/productCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Category from "./Advert_Banner";
import Categories from "@/components/LandingPage/Categories";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const productsList = [
  {
    product_image: "/assets/photo_2024-11-07_14-19-39.jpg",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
    product_code: 1,
  },

  {
    product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
    product_code: 2,
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-423.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
    product_code: 3,
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-52.jpg",
    product_name: "product name 3",
    product_price: 150,
    discounted_from: 660,
    product_code: 5,
  },
  {
    product_image: "/assets/custoemr-engravings.png",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
    product_code: 6,
  },
  {
    product_image: "/assets/download (3).png",
    product_name: "product name 2",
    product_price: 200,
    product_code: 7,
    // discounted_from: 500,
  },
];

const base_url = import.meta.env.VITE_BASE_URL;

const fetchProducts = async (page) => {
  let url = `${base_url}/product/fetch-all`;
  console.log(" url ==> ", url);
  return axios.get(url);
};

const Home = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["products-fetch"],
    queryFn: () => fetchProducts(),
    staleTime: 30000,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    console.log("error => ", error);

    return <h1>{error.message}</h1>;
  }
  const response = data?.data;
  console.log("product list response------> ", response);
  const products_list = response?.docs;
  console.log("product list ------> ", products_list);

  return (
    <div className="mx-52">
      <div className="relative my-5 py-10">
        <h2 className="mb-7 text-center text-4xl">Latest Products</h2>
        <Category />
      </div>
      <div>
        <Categories />
      </div>

      <div className="my-20 sm:py-28">
        {/* <div className="mx-auto w-3/4"> */}
        <div className="">
          <div className="mx-auto mb-12 w-[700px] text-center">
            <h1 className="mb-4 text-4xl">CNC AESTHETIC Products</h1>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              laudantium ab tempore molestias ad necessitatibus reiciendis quod
              sunt dolorum minima.
            </p> */}
          </div>
          <div>
            <div className="flex flex-row flex-wrap items-start justify-start gap-x-14 gap-y-9">
              {products_list.map((product) => {
                return <ProductCard product={product} />;
              })}
            </div>
            <div className="text-md my-10 text-center">
              <Link
                className="rounded-md border border-sky-700 px-4 py-2 duration-300 hover:bg-sky-700 hover:text-white"
                to="/products"
              >
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-white py-10">
        <h2 className="text-center text-2xl">Common Questions</h2>
        <AccordionCard />
      </div>
    </div>
  );
};

export default Home;
