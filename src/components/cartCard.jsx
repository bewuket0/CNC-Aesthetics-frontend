import React from "react";
import { Card, CardContent } from "./ui/card";
import { IoAdd, IoClose, IoRemove } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { ChevronRight } from "lucide-react";
import { CiBookmark } from "react-icons/ci";
import { useStore } from "@/store/store";

import { Button } from "@/components/ui/button";
const CartCard = ({ item }) => {
  console.log("item", item);
  const deleteCartItem = useStore((state) => state.deleteCartItem);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  return (
    <div>
      <Card className="my-5 h-[120px] w-full">
        <CardContent className="flex h-full flex-row items-center px-5 py-3">
          {/* Image Section */}
          <div className="h-[100px] w-[150px]">
            <img
              className="h-full w-full rounded-md object-cover"
              src={item?.product_image}
              alt="Product"
            />
          </div>
          {/* Content Section */}
          <div className="ml-5 flex w-full flex-col justify-between space-y-3">
            {/* Header Section */}
            <div className="flex justify-between">
              <div className="">
                <h2 className="text-lg">{item?.product_name || ""}</h2>
                <div className="flex flex-row space-x-4">
                  <p className="text-sm text-sky-700">
                    {item?.product_price || 0} Birr
                  </p>
                  {item?.discount > 0 && (
                    <p className="text-sm text-slate-500 line-through">
                      {item?.discount} Birr
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="cursor-pointer text-slate-500 transition-all hover:scale-110">
                <IoClose size={20} />
              </div> */}
              <p className="text-lg font-semibold text-sky-700">
                {item?.product_price * item?.quantity} Birr
              </p>
            </div>
            {/* Price and Quantity Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementQuantity(item.product_code)}
                  className="flex h-6 w-6 items-center justify-center rounded border"
                >
                  <IoRemove />
                </button>
                <span>{item?.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.product_code)}
                  className="flex h-6 w-6 items-center justify-center rounded border"
                >
                  <IoAdd />
                </button>
              </div>
              <div className="flex space-x-2 text-gray-500">
                {/* <Button variant="outline" size="icon">
                  // {/* <ChevronRight /> 
                  <CiBookmark />
                </Button> */}
                <Button
                  onClick={() => deleteCartItem(item.product_code)}
                  variant="outline"
                  size="icon"
                >
                  {/* <ChevronRight /> */}
                  <AiOutlineDelete size={18} />
                </Button>
                {/* <button className="flex items-center space-x-1 hover:text-rose-700">
                  <AiOutlineDelete size={18} /> <span>Delete</span>
                </button> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCard;
