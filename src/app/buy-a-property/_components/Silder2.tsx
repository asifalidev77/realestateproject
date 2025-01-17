"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
export default function Silder2() {
    const Slider = dynamic(() => import("react-slick"), { ssr: false });
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <>
      <Slider {...settings}>
{setImages1.map((i) => (
    <div key={i.id} className="w-full">
        <img src={i.propertyImg} alt="sliderImage" className="w-[100%]" />
    </div>
      ))}
    </Slider>
          </>
        );
    }           
    const setImages1 = [
        {
            id: 1,
          
          propertyImg: "/Residential2.webp",
        },
        {
            id: 2,
            propertyImg: "/property.jpg",
          },
      {
        id: 3,
          propertyImg: "/Residential3.webp",
          },
      {
        id: 4,
          propertyImg: "/Residential4.webp",
          },
          {
            id: 5,
            propertyImg: "/Residential5.webp",
            },
            {
                id: 6,
                propertyImg: "/Residential6.webp",
                },
      ];