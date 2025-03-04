import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";

const PriceDetail = () => {
  const cartItems = useStore((state) => state.cartItems);
  const toBeDelivered = useStore((state) => state.toBeDelivered);
  const deliveryCost = useStore((state) => state.deliveryCost);

  let totalDiscount = 0;
  let totalPrice = 0;
  let totalDelivery = toBeDelivered ? deliveryCost : 0;

  cartItems.map((item) => {
    console.log("item.discount   :-  ", item.discount);
    totalDiscount += item.discount;

    totalPrice = totalPrice + item.product_price * item.quantity;
  });

  const totalPriceAfterDiscount = totalPrice - totalDiscount + totalDelivery;
  console.log("cartItems   :-  ", cartItems);
  console.log("toBeDelivered   :-  ", toBeDelivered);
  console.log("deliveryCost   :-  ", deliveryCost);

  return (
    <div className="w-full">
      <h2 className="mb-3 text-2xl">PriceDetail</h2>
      <div className="border p-5">
        <div>
          {/* <h2>Delivery</h2>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div> */}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl">subtotal</p>
          </div>
          <div className="mt-3 flex flex-col gap-y-1">
            <div className="flex items-center justify-between">
              <p>discount</p>
              <p>{totalDiscount}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>servicefee</p>
              <p>0</p>
            </div>
            <div className="flex items-center justify-between">
              <p>vat</p>
              <p>0</p>
            </div>
            <div className="flex items-center justify-between">
              <p>delivery</p>
              <p>{totalDelivery}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Price</p>
              <p>{totalPrice}</p>
            </div>
            <div className="my-1 flex items-center justify-between border-t py-2">
              <p className="font-medium">Total Price</p>
              <p>{totalPriceAfterDiscount}</p>
            </div>
            <div className="mt-10 w-full">
              <Button className="w-full bg-custom-primary hover:bg-sky-800">
                Checkout Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetail;
