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

const ProductCard = ({ product }) => {
  console.log("product ", product);
  const {
    product_name,
    discounted_from,
    product_code,
    product_price,
    product_image,
  } = product;

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
            <p className="text-lg font-semibold text-sky-700">
              {product_price} Birr
            </p>
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
          <Button size="icon" className="bg-custom-primary hover:bg-sky-500">
            <BsCart2 size={32} />
            {/*   Add To Cart  */}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
