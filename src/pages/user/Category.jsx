import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productsList = [
  {
    product_image: "/assets/photo_2024-11-07_14-19-39.jpg",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
  },

  {
    product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-423.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
  },
  {
    product_image: "/assets/custoemr-engravings.png",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-52.jpg",
    product_name: "product name 3",
    product_price: 150,
    discounted_from: 660,
  },
  {
    product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
    product_name: "product name 2",
    product_price: 200,
    discounted_from: 500,
  },
  {
    product_image: "/assets/custoemr-engravings.png",
    product_name: "product name",
    product_price: 100,
    discounted_from: 200,
  },
  {
    product_image: "/assets/download (3).png",
    product_name: "product name 2",
    product_price: 200,
    // discounted_from: 500,
  },
];
const Category = () => {
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {productsList.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                    <div className="h-full">
                      <img
                        className="h-full"
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Category;
