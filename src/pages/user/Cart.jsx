import CartCard from "@/components/cartCard";
import PriceDetail from "@/components/PriceDetail";

import { useStore } from "@/store/store";
import { useMemo, useState } from "react";

const Cart = () => {
  // const [open, setOpen] = useState(false);

  const cartItems = useStore((state) => state.cartItems);
  // const filtered = useMemo(
  //   () => tasks.filter((task) => task.state == state),
  //   [tasks, state]
  // );
  console.log("cartItems", cartItems);
  // console.log("filtered", filtered);

  return (
    <div>
      <div className="mx-auto my-10 w-3/4 bg-white p-10">
        <h2 className="pb-2 text-4xl">Cart</h2>

        <div className="flex justify-between">
          <div className="mb-10 mt-5 w-3/5 space-y-5 border-t pt-5">
            {cartItems.length == 0 && <p className="text-3xl">Cart is empty</p>}
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
            {/* <CartCard /> */}
            {/* <CartCard /> */}
            {/* <CartCard /> */}
          </div>
          <div className="min-w-96 py-5">
            <PriceDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
