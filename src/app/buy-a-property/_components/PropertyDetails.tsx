"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
interface PropertyDetailsProps {
  type?: string;
  price: string;
  bed: string;
  bath: string;
  marala: string;
  location: string;
  addtime: string;
  
}
export default function properptyDetails({type,
    price,
    bed,
    bath,
    marala,
    location,
    addtime,
}: PropertyDetailsProps){
        const Slider = dynamic(() => import("react-slick"), { ssr: false });
          const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
  return <>
<div className="mt-[30px] rounded-[10px] static z-0 h-auto"   style={{ boxShadow: "0px 0px 4px 0px #00000040" }}>
<Slider {...settings}>
{setImages1.map((i) => (
    <div key={i.id} className="w-full">
        <img src={i.propertyImg} alt="sliderImage" className="w-[100%]" />
    </div>
      ))}
    </Slider>
    <div className="mx-[17px]">
        <div className="flex justify-between mt-[20px]">
        <div><h3 className="text-[27px] text-[#2D2D2D] font-semibold">{price}</h3></div>
        <div><h4 className="text-[#2D2D2D] font-semibold">{type}</h4></div>
        </div>
        <div className="flex gap-x-[17px] mt-[13px]">
            <div className="flex"><h6 className="font-normal text-[13.5px] text-[#4E4E4E]"><img src="/bed-icon.svg" alt="bed-icon" className="w-[18px] h-[12px] inline-block mr-[10px]" /> {bed}</h6></div>
            <div className="flex"><h6 className="font-normal text-[13.5px] text-[#4E4E4E]"><img src="/bath-tub-icon.svg" alt="bed-icon" className="w-[18px] h-[12px] inline-block mr-[10px]" />{bath}</h6></div>
            <div className="flex"><h6 className="font-normal text-[13.5px] text-[#4E4E4E]"><img src="/arrowDiagnol.svg" alt="bed-icon" className="w-[18px] h-[12px] inline-block mr-[10px]" />{marala}</h6></div>
        </div>
        <div><p className="font-normal mt-[7px] text-[13px] text-[#4E4E4E]">{location}</p></div>
        <div><p className="font-normal my-[7px] text-[13px] text-[#4E4E4E]">{addtime}</p></div>
    </div>
</div> 
</>;
}
const setImages1 = [
    {
        id: 1,
      propertyImg: "/property.jpg",
    },
    {
        id: 2,
      propertyImg: "/Residential2.webp",
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

