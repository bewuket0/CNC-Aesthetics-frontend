import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
const PriceDetail = () => {
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
            <p>400 </p>
          </div>
          <div className="flex items-center justify-between">
            <p>discount</p>
            <p>-20</p>
          </div>
          <div className="flex items-center justify-between">
            <p>servicefee</p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between">
            <p>delivery</p>
            <p>40</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>420</p>
          </div>
          <div className="mt-10 w-full">
            <Button className="w-full bg-custom-primary hover:bg-sky-800">
              Checkout Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetail;
