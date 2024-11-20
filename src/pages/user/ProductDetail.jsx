import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

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

const ProductDetail = () => {
  return (
    <div>
      <h2 className="my-16 text-center text-5xl">Product Detail</h2>
      <div className="mx-auto w-2/3">
        <div className="flex space-x-20">
          <div>
            <img
              className="h-[370px] w-[400px] rounded-md"
              src={product.product_image}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl">{product.product_name}</h1>
            <div className="my-3 flex gap-x-4">
              <p className="text-xl text-slate-500 line-through decoration-slate-400">
                {product.discounted_from} Birr
              </p>
              <p className="text-xl font-semibold text-red-700">
                {product.product_price} Birr
              </p>
            </div>
            <p>{product.description}</p>
            <div className="mt-10">
              <Button className="bg-custom-primary hover:bg-custom-navy-1">
                <ShoppingCart /> Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-16 flex flex-row space-x-10">
            {product.image_gallery.map((image) => {
              return (
                <img className="h-[200px] w-[200px] rounded-md" src={image} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
