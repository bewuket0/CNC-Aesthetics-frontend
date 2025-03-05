import CartCard from "@/components/cartCard";
import Modal from "@/components/Modal";
import PriceDetail from "@/components/PriceDetail";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsCart2 } from "react-icons/bs";

import { useStore } from "@/store/store";
import { useMemo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Trash2 } from "lucide-react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

const Cart = () => {
  // const [open, setOpen] = useState(false);

  const cartItems = useStore((state) => state.cartItems);
  // const filtered = useMemo(
  //   () => tasks.filter((task) => task.state == state),
  //   [tasks, state]
  // );
  const removeCartItems = useStore((state) => state.removeCartItems);

  // const removercartItem = useStore((state) => state.removeCartItems);
  console.log("cartItems", cartItems);

  // console.log("filtered", filtered);
  return (
    <div>
      <div className="mx-auto my-10 w-3/4 bg-white p-10">
        <h2 className="pb-2 text-4xl">Cart</h2>

        <div className="flex justify-between">
          <div className="w-3/5">
            {/* <div className="flex flex-row-reverse">
              {cartItems.length > 0 && (
                // <Button
                //   onClick={removeCartItems}
                //   className="space-x-2 bg-rose-800 hover:bg-pink-700"
                // >
                //   <AiOutlineDelete />
                //   Remove
                // </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">
                       
                      <Trash2 /> Clear Cart
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Confirm Action</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <div className="space-x-4">
                        <Button variant="outline">Cancel</Button>
                        <Button
                          onClick={removeCartItems}
                          // className="bg-rose-800 hover:bg-rose-700"
                          variant="destructive"
                          type="submit"
                        >
                          Confirm
                        </Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div> */}
            <div className="mb-10 mt-5 border-t pt-5">
              {cartItems.length == 0 && (
                <>
                  <p className="mt-10 text-center text-2xl text-slate-400">
                    Your Cart is empty
                  </p>

                  {/* <BsCart2 className="mx-auto text-slate-400" size={80} /> */}
                  <PiShoppingCartSimpleThin
                    className="mx-auto text-gray-300"
                    size={60}
                  />
                </>
              )}
              <div>
                {cartItems.map((item) => (
                  <CartCard key={item.product_code} item={item} />
                ))}
              </div>
              {/* <CartCard /> */}
              {/* <CartCard /> */}
              {/* <CartCard /> */}
              <div className="mt-10 flex flex-row-reverse">
                {cartItems.length > 0 && (
                  // <Button
                  //   onClick={removeCartItems}
                  //   className="space-x-2 bg-rose-800 hover:bg-pink-700"
                  // >
                  //   <AiOutlineDelete />
                  //   Remove
                  // </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive">
                        {/* <Button className="bg-rose-800 hover:bg-pink-700"> */}
                        <Trash2 /> Clear Cart
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Confirm Action</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <div className="space-x-4">
                          {/* <Button variant="outline">Cancel</Button> */}
                          <Button
                            onClick={removeCartItems}
                            // className="bg-rose-800 hover:bg-rose-700"
                            variant="destructive"
                            type="submit"
                          >
                            Confirm
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>
          {cartItems.length > 0 && (
            <div className="min-w-96 space-y-5 py-5">
              <PriceDetail />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
