import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "react-router-dom";
import { useStore } from "@/store/store";
import { IoAdd, IoCartOutline, IoRemove } from "react-icons/io5";

// zoom
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { BsCart2 } from "react-icons/bs";

const base_url = import.meta.env.VITE_BASE_URL;

const product = {
  product_image: "/assets/custoemr-engravings.png",
  product_name: "Engraved cutting boards",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem distinctio natus sequi, eius veritatis officia nesciunt iusto quis aspernatur?    , consectetur adipisicing elit. Repellat rem distinctio natus sequi,",
  product_price: 100,
  discounted_from: 200,
  image_gallery: [
    "/assets/custoemr-engravings.png",
    "/assets/download (3).png",
    "/assets/photo_2022-07-07_22-35-52.jpg",
  ],
  product_code: 6,
};
const fetchProduct = async (product_code) => {
  console.log("base url ==> ", base_url);
  console.log("product_code ==> ", product_code);

  return axios.get(`${base_url}/product/detail/${product_code}`);
};

const ProductDetail = () => {
  const addCartItem = useStore((state) => state.addCartItem);
  const cartItems = useStore((state) => state.cartItems);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);

  const { pcode } = useParams(); // Fetching the "id" parameter from the URL
  console.log("prodicut code", pcode);
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["product", pcode],
    queryFn: () => fetchProduct(pcode),
    staleTime: 30000,
  });

  console.log("data ", data);
  console.log("error ", error);

  if (isLoading || !data?.data?.data) {
    return (
      <div className="mt-20 text-center text-xl">
        Loading product details...
      </div>
    );
  }
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const product_detail = data.data.data;
  console.log("product detail ", product_detail);
  console.log("product test = = >  ", {
    product_code: product_detail.product_code,
    product_name: product_detail.product_name,
    product_image: product_detail.product_image,
    discount: 0,
    quantity: 1,
    product_price: product_detail.product_price,
  });

  const product_in_cart = cartItems.find(
    (product) => product.product_code == product_detail.product_code
  );
  console.log("product in cart ==== ", product_in_cart);
  const addToCartHandler = () => {
    addCartItem({
      product_code: product_detail.product_code,
      product_name: product_detail.product_name,
      product_image: product_detail.product_image,
      discount: 0,
      quantity: 1,
      product_price: product_detail.product_price,
    });
  };

  const cart_add_css =
    "flex h-10 w-11 cursor-pointer items-center justify-center rounded bg-sky-500 text-white hover:bg-sky-600";

  return (
    <div>
      <h2 className="my-16 text-center text-5xl">Product Detail</h2>
      <div className="mx-auto w-2/3">
        <div className="flex space-x-20">
          {/* <div>
            <img
              className="h-[370px] w-[400px] rounded-md"
              src={product_detail.product_image}
            />
          </div> */}
          <div>
            <Dialog>
              <DialogTrigger>
                <img
                  src={product_detail.product_image}
                  alt="Thumbnail"
                  className="h-[300px] w-[400px] cursor-pointer rounded-md transition-all duration-300 hover:scale-105"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                {/* <DialogTitle>Image Preview</DialogTitle> */}
                <VisuallyHidden>
                  <DialogTitle>Image Preview</DialogTitle>
                </VisuallyHidden>
                <img
                  src={product_detail.product_image}
                  alt="Full Image"
                  className="h-auto w-full rounded-md"
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl">{product_detail.product_name}</h1>
            <div className="my-3 flex gap-x-4">
              {product_detail.discount && (
                <p className="text-xl text-slate-500 line-through decoration-slate-400">
                  {product_detail.discount} Birr
                </p>
              )}
              <p className="text-xl font-semibold text-sky-700">
                {product_detail.product_price} Birr
              </p>
            </div>
            <p>{product_detail.description}</p>
            <div className="mt-10">
              {product_in_cart ? (
                <div className="my-2 flex items-center space-x-4">
                  <button
                    onClick={() =>
                      decrementQuantity(product_in_cart.product_code)
                    }
                    className={cart_add_css}
                  >
                    <IoRemove />
                  </button>
                  <span>{product_in_cart.quantity}</span>
                  <button
                    onClick={() =>
                      incrementQuantity(product_in_cart.product_code)
                    }
                    className={cart_add_css}
                  >
                    <IoAdd />
                  </button>
                </div>
              ) : (
                <Button
                  onClick={addToCartHandler}
                  // size="icon"
                  className="bg-sky-500 hover:bg-sky-600"
                >
                  <BsCart2 />
                  <span>Add to Cart</span>
                  {/*   Add To Cart  */}
                </Button>
              )}
              {/* <Button
                onClick={addToCartHandler}
                className="bg-custom-primary hover:bg-custom-navy-1"
              >
                <ShoppingCart /> Add To Cart
              </Button> */}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-16 flex flex-row space-x-10">
            {/* {product_detail.image_gallery.map((image) => {
              return (
                <img className="h-[200px] w-[200px] rounded-md" src={image} />
              );
            })} */}
            {product_detail.image_gallery?.map((image, idx) => (
              <img
                key={idx}
                className="h-[200px] w-[200px] rounded-md"
                src={image}
              />
            ))}
          </div>
        </div>
        {/* <div className="space-y-4">
          <div className="flex items-center justify-center">
            <Dialog>
              <DialogTrigger>
                <img
                  src={product_detail.product_image}
                  alt="Thumbnail"
                  className="cursor-pointer rounded-lg transition-all transition-transform duration-300 hover:scale-105"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img
                  src={product_detail.product_image}
                  alt="Full Image"
                  className="h-auto w-full rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center justify-center">
            <Dialog>
              <DialogTrigger>
                <img
                  src={product_detail.product_image}
                  alt="Thumbnail"
                  className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <VisuallyHidden>
                  <DialogTitle>Image Preview</DialogTitle>
                </VisuallyHidden>
                <img
                  src={product_detail.product_image}
                  alt="Full Image"
                  className="h-auto w-full rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center justify-center">
            <Zoom>
              <img
                src={product_detail.product_image}
                alt="Thumbnail"
                className="cursor-pointer rounded-lg"
              />
            </Zoom>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
