import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IoAdd, IoCartOutline, IoRemove } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStore } from "@/store/store";

const ProductCard = ({ product }) => {
  console.log("product ", product);
  const {
    product_name,
    discounted_from,
    product_code,
    product_price = 10,
    product_image,
  } = product;

  console.log("product image ", product_image);

  const addCartItem = useStore((state) => state.addCartItem);
  const cartItems = useStore((state) => state.cartItems);
  const addToCartHandler = () => {
    addCartItem({
      product_code: product_code,
      product_name: product_name,
      product_image: product_image,
      discount: 0,
      quantity: 1,
      product_price: product_price,
    });
  };
  console.log("cart items ", cartItems);

  const product_in_cart = cartItems.find(
    (product) => product.product_code == product_code
  );
  // console.log("product_in_cart ==> ", product_in_cart);

  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);

  return (
    // <Card className="w-[300px] border-none bg-transparent">
    <Card className="w-[300px]">
      {/* <CardHeader className="border">
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <div></div> */}
      <div className="mx-4 my-5">
        <img src={product_image} className="h-[200px] w-full rounded-t-lg" />
        <div>
          {/* <h2>Category</h2> */}
          {/* <p className="my-1 text-lg font-semibold">{product_name}</p> */}
          <p className="my-1 text-lg font-semibold">
            {product_name.length > 25
              ? `${product_name.slice(0, 25)} ...`
              : product_name}
          </p>

          <div className="flex justify-between">
            <p className="text-lg text-sky-700">{product_price} Birr</p>
            <p className="text-md text-slate-400 line-through">
              {discounted_from ? `${discounted_from} Birr` : ""}
            </p>
          </div>
        </div>
        <div className="mr-3 flex items-baseline justify-between">
          <Link
            to={`/products/detail/${product_code ?? 2}`}
            className="text-custom-primary hover:underline"
          >
            Detail
          </Link>
          {product_in_cart ? (
            <div className="my-2 flex items-center space-x-2">
              <button
                onClick={() => decrementQuantity(product_in_cart.product_code)}
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border hover:bg-sky-600 hover:text-white"
                // size="icon"
                // className="bg-transparent font-bold"
              >
                <IoRemove />
              </button>
              <span>{product_in_cart.quantity}</span>
              <buton
                onClick={() => incrementQuantity(product_in_cart.product_code)}
                // size="icon"
                // className="bg-transparent font-bold"

                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border hover:bg-sky-600 hover:text-white"
              >
                <IoAdd />
              </buton>
            </div>
          ) : (
            <Button
              onClick={addToCartHandler}
              size="icon"
              className="bg-transparent font-bold text-custom-primary hover:bg-transparent hover:text-sky-600"
            >
              <BsCart2 size={34} />
              {/*   Add To Cart  */}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
