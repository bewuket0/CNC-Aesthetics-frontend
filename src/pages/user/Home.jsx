import React from "react";

import Navigation from "./Navigation";
import AccordionCard from "@/components/AccordionCard";
import ProductCard from "@/components/productCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const productsList = [
  {
    product_image: "/assets/photo_2024-11-07_14-19-39.jpg",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
  },

  {
    product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-423.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-52.jpg",
    product_name: "product name 3",
    product_price: 150,
    discounted_from: 660,
  },
  {
    product_image: "/assets/custoemr-engravings.png",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
  },
  {
    product_image: "/assets/download (3).png",
    product_name: "product name 2",
    product_price: 200,
    // discounted_from: 500,
  },
];
const Home = () => {
  return (
    <div className="">
      <div className="my-16 sm:mx-10">
        <div className="mx-auto w-3/4">
          <div className="mx-auto mb-10 w-[600px] text-center">
            <h1 className="mb-2 text-4xl font-semibold">
              CNC AESTHETIC Products
            </h1>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              laudantium ab tempore molestias ad necessitatibus reiciendis quod
              sunt dolorum minima.
            </p> */}
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start gap-x-9 gap-y-7">
            {productsList.map((product) => {
              return <ProductCard product={product} />;
            })}
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
