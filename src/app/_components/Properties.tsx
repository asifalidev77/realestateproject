"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title } from "process";
import dynamic from "next/dynamic";
export default function Properties() {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-[#FF9D00] p-2 rounded-full hover:bg-black"
    >
      ←
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-[#FF9D00] p-2 rounded-full hover:bg-black"
    >
      →
    </button>
  );
  const Slider = dynamic(() => import("react-slick"), { ssr: false });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <div className="px-[20px] md:px-[50px] lg:px-[86px] w-full m-auto ">
        <div className="mt-20 gap-5 flex flex-col mb-[50px] ">
          <div className="text-center">
            <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em] w-[100%] m-auto">
              Properties Available in{" "}
              <span className="text-[#ff9d00]">Lahore</span>
            </h1>
          </div>
          <Slider {...settings}>
            {date.map((d) => (
              <div key={d.id} className="min-w-[100%] flex-shrink-0 px-4">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={d.image}
                    alt="sa"
                    className="w-full h-64 object-cover opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h3 className="text-white font-bold text-lg">{d.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
const date = [
  { id: 1, title: "House for Sale", image: "/availableProperty1.png" },
  { id: 2, title: "Plote for sale", image: "/availableProperty1.png" },
  { id: 3, title: "Home for sale", image: "/availableProperty1.png" },
];
