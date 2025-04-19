// import PaginationCard from "@/components/PaginationCard";
// import ProductCard from "@/components/productCard";
// import * as React from "react";
// import { Input } from "@/components/ui/input";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { useEffect } from "react";

// const base_url = import.meta.env.VITE_BASE_URL;

// const fetchProducts = async (page, search, limit) => {
//   let url = `${base_url}/product/fetch-all?page=${page}&limit=${limit}&search_key=${search}`;
//   console.log(" url ==> ", url);
//   return axios.get(url);
// };

// const categories = [
//   {
//     value: "all",
//     label: "All",
//   },
//   {
//     value: "wall-decorations",
//     label: "Wall Decorations",
//   },
// ];
// const productsList = [
//   {
//     product_image: "/assets/photo_2024-11-07_14-19-39.jpg",
//     product_name: "product name",
//     product_price: 100,
//     discounted_from: 200,
//     product_code: 1,
//   },

//   {
//     product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
//     product_name: "product name 2",
//     product_price: 200,
//     discounted_from: 500,
//     product_code: 2,
//   },
//   {
//     product_image: "/assets/photo_2024-11-07_14-19-423.jpg",
//     product_name: "product name 2",
//     product_price: 200,
//     discounted_from: 500,
//     product_code: 3,
//   },
//   {
//     product_image: "/assets/photo_2024-11-07_14-19-52.jpg",
//     product_name: "product name 3",
//     product_price: 150,
//     discounted_from: 660,
//     product_code: 5,
//   },
//   {
//     product_image: "/assets/custoemr-engravings.png",
//     product_name: "product name",
//     product_price: 100,
//     discounted_from: 200,
//     product_code: 6,
//   },
//   {
//     product_image: "/assets/download (3).png",
//     product_name: "product name 2",
//     product_price: 200,
//     product_code: 7,
//     // discounted_from: 500,
//   },
// ];

// const Products = () => {
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [search, setSearch] = useState("");

//   const { data, error, isLoading, isError, refetch } = useQuery({
//     // queryKey: ["products"],
//     queryKey: ["products", page, search, limit],
//     queryFn: () => fetchProducts(page, search),
//     staleTime: 30000,
//   });

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       refetch();
//     }, 500);
//     return () => clearTimeout(delayDebounceFn);
//   }, [search, refetch]);

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   const products_list = data?.data;
//   console.log("product data ---> ", products_list);

//   return (
//     <div className="mx-auto w-4/5">
//       <h2 className="my-10 text-center text-4xl">Products</h2>
//       <div className="flex justify-between">
//         <div className="w-[400px]">
//           <Input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="search by product name ...."
//           />
//         </div>
//         <div className="mb-10 flex w-[300px] items-center space-x-3">
//           <label className="text-sm text-slate-500">Filter</label>
//           <Select className="">
//             <SelectTrigger className="">
//               <SelectValue
//                 defaultValue="all"
//                 // className="text-slate-300"
//                 placeholder="Select Categories"
//               />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Categories</SelectLabel>
//                 {categories.map((category) => {
//                   return (
//                     <SelectItem value={category.value}>
//                       {category.label}
//                     </SelectItem>
//                   );
//                 })}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//       {/* className="flex flex-row flex-wrap justify-start gap-x-14 gap-y-9" */}
//       <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
//         {/* <div className="grid grid-cols-3 items-start gap-y-10 sm:grid-cols-4"> */}

//         {products_list?.docs.map((product) => {
//           return <ProductCard product={product} />;
//         })}
//       </div>
//       <div className="my-10 text-custom-primary">
//         <PaginationCard />
//       </div>
//     </div>
//   );
// };

// export default Products;
import PaginationCard from "@/components/PaginationCard";
import ProductCard from "@/components/productCard";
import * as React from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;

const fetchProducts = async (page, search, limit, category) => {
  // let url = `${base_url}/product/fetch-all?page=${page}&limit=${limit}&search_key=${search}&category=${category}`;
  // console.log("Fetching products from:", url);
  // return axios.get(url).then((res) => res.data);

  const params = new URLSearchParams();

  params.append("page", page);
  if (limit) params.append("limit", limit);
  if (search) params.append("search_key", search);
  if (category && category !== "all") params.append("category", category);

  const url = `${base_url}/product/fetch-all?${params.toString()}`;
  console.log("Fetching products from:", url);
  return axios.get(url).then((res) => res.data);
};

const categories = [
  { value: "all", label: "All" },
  { value: "wall-decorations", label: "Wall Decorations" },
];

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { categoryid } = useParams();

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["products", page, debouncedSearch, limit],
    queryFn: () => fetchProducts(page, debouncedSearch, limit, categoryid),
    staleTime: 30000,
    keepPreviousData: true,
  });

  // Detect inactivity (3 seconds) before updating debouncedSearch
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 3000);

    return () => clearTimeout(handler);
  }, [search]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  const products_list = data?.docs || [];
  console.log("Product data:", products_list);

  return (
    <div className="mx-auto w-4/5">
      <h2 className="my-10 text-center text-4xl">Products</h2>
      <div className="flex justify-between">
        <div className="w-[400px]">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name..."
          />
        </div>
        <div className="mb-10 flex w-[300px] items-center space-x-3">
          <label className="text-sm text-slate-500">Filter</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
        {products_list.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="my-10 text-custom-primary">
        <PaginationCard
          page={page}
          totalPages={data?.totalPages}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Products;
