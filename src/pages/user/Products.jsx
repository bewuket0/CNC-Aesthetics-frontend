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
const categories = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "wall-decorations",
    label: "Wall Decorations",
  },
];
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
const Products = () => {
  return (
    <div className="mx-auto w-4/5">
      <h2 className="my-10 text-center text-4xl">Products</h2>
      <div className="flex justify-between">
        <div className="w-[400px]">
          <Input placeholder="search by product name ...." />
        </div>
        <div className="mb-10 flex w-[300px] items-center space-x-3">
          <label className="text-sm text-slate-500">Filter</label>
          <Select className="">
            <SelectTrigger className="">
              <SelectValue
                defaultValue="all"
                // className="text-slate-300"
                placeholder="Select Categories"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => {
                  return (
                    <SelectItem value={category.value}>
                      {category.label}
                    </SelectItem>
                  );
                })}
                {/* <SelectLabel>Categories</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* className="flex flex-row flex-wrap justify-start gap-x-14 gap-y-9" */}
      <div className="grid grid-cols-4 items-start gap-y-10">
        {productsList.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
      <div className="my-10 text-custom-primary">
        <PaginationCard />
      </div>
    </div>
  );
};

export default Products;
