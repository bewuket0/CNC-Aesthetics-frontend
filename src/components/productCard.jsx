import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IoCartOutline } from "react-icons/io5";
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

  // const addCartItem = useStore((state) => state.addCartItem);

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
          <p className="my-1 text-xl font-semibold">{product_name}</p>
          {/* <p className="text-md border">
            Lorem ipsum, dolor sit amet con sec tetur adipisicing elit. Ducimus,
            repellat.
          </p> */}
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
          <Button
            // onClick={() => addusetore()}
            size="icon"
            className="bg-transparent font-bold text-custom-primary hover:bg-transparent hover:text-sky-600"
          >
            <BsCart2 size={34} />
            {/*   Add To Cart  */}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
