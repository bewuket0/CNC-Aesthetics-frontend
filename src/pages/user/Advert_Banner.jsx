import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import module

// Import Swiper styles
import "swiper/css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productsList = [
  // {
  //   product_image: "/assets/photo_2024-11-07_14-19-39.jpg",
  //   product_name: "product name",
  //   product_price: 100,
  //   discounted_from: 200,
  // },

  {
    product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-423.jpg",
  },
  {
    product_image: "/assets/custoemr-engravings.png",
  },
  {
    product_image: "/assets/photo_2024-11-07_14-19-52.jpg",
  },
  {
    product_image: "/assets/photo_2022-07-07_22-35-52.jpg",
  },
  {
    product_image: "/assets/custoemr-engravings.png",
  },
  {
    product_image: "/assets/download (3).png",
  },
];
const Advert_Banner = () => {
  return (
    <div>
      <div className="">
        <Swiper
          modules={[Autoplay]} // ✅ Enable autoplay module
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000, // 3 seconds (use 180000 for 3 minutes)
            disableOnInteraction: false,
          }}
          className="h-[300px] w-full rounded-xl"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        > */}
          {productsList.map((product, index) => (
            <SwiperSlide key={index} className="bg-gray-800">
              {" "}
              <div className="h-full">
                <img
                  className="h-full w-full"
                  src={product.product_image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="bg-gray-700 p-5">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-gray-600 p-5">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-gray-500 p-5">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-gray-400 p-5">Slide 5</SwiperSlide>
          ... */}
        </Swiper>
      </div>
    </div>
  );
};

export default Advert_Banner;
