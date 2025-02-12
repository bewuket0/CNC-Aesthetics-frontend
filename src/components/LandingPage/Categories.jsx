// import { Button } from "./ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { IoCartOutline } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useStore } from "@/store/store";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const base_url = import.meta.env.VITE_BASE_URL;

const fetchCategories = async (page) => {
  let url = `${base_url}/category/all?limit=5`;
  console.log(" url ==> ", url);
  return axios.get(url);
};

const Categories = ({ product }) => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(page),
    staleTime: 30000,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const response = data?.data;
  console.log("cateogries data ---> ", response);

  const categories_list = response?.data?.docs;
  console.log("cateogries data ---> ", categories_list);
  // const addCartItem = useStore((state) => st
  // const categories_list = response?.data ate.addCartItem);

  // const addusetore = useStore((state) =>
  //   state.addCartItem({
  //     productName: "New Product 00",
  //     productImage: "/path/to/image.jpg",
  //     discount: 10,
  //     quantity: 3,
  //     price: 130,
  //   })
  // );
  // const add = useStore.getState().addCartItem({
  //   productName: "New Product",
  //   productImage: "/path/to/image.jpg",
  //   discount: 5,
  //   quantity: 1,
  //   price: 100,
  // });

  return (
    <div>
      <h1 className="mb-10 text-2xl">Shop our most popular categories</h1>
      <div>
        <div className="flex flex-row flex-wrap items-start justify-start gap-x-14 gap-y-9">
          {categories_list.map((category) => {
            return (
              <div className="text-center" key={category.category_code}>
                <img
                  className="h-48 w-48 rounded-full object-cover"
                  src={category.category_image}
                  alt=""
                />
                <p>{category.category_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
