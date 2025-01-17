"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
export default function Testimonial() {
  const Slider = dynamic(() => import("react-slick"), { ssr: false });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    ],
  };
  return (
    <>
      <div className="px-[20px] md:px-[50px] lg:px-[86px] w-full m-auto bg-[#F8F8F8]  py-[30px]">
        <div className="mt-20 gap-5 flex flex-col ">
          <div className="text-center w-full lg:w-[660px] mx-auto">
            <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em] w-[100%] m-auto">
              Our Happy Clients{" "}
            </h1>
            <p className="font-normal text-[23px] leading-[1.5rem]">
              we always take care of our client and they are very happy.We have
              collected a few stories for you.
            </p>
          </div>
          <Slider {...settings}>
            {testinomialData.map((t) => (
              <div key={t.id} className="min-w-[100%] flex-shrink-0 px-4">
                <div className="flex flex-col bg-[#18202A] py-[70px] px-[39px] rounded-[15px] ">
                  <div className="flex gap-7 content-center items-center mb-[20px]">
                    <div>
                      <img src={t.profile} alt="" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-[25px] ">
                        {t.name}
                      </h4>
                      <h3 className="text-white font-normal text-[15px]">
                        {t.position}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <p className="text-white font-normal text-[15px]">
                      {t.review}
                    </p>
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

const testinomialData = [
  {
    id: 1,
    name: "Robert Martin",
    profile: "/user1.png",
    position: "SR. Manager",
    review:
      "I recently had the pleasure of working with Hasaaj Buildings and Marketing for my real estate needs, and I cannot recommend them enough. Their expertise in both real estate and marketing truly sets them apart from other agencies. They were able to not only find me the perfect property, but also effectively market and sell my previous home. Their attention to detail and personalized approach made the entire process seamless and stress-free. I was constantly impressed by their knowledge of the market and their ability to negotiate on my behalf. If you are looking for a top-notch real estate agency, look no further than Hasaaj Buildings and Marketing. They truly go above and beyond for their clients and I am grateful for their exceptional service. Thank you Hasaaj Buildings and Marketing for making my real estate dreams a reality!",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    profile: "/user2.png",
    position: "UI/UX Developer",
    review:
      "I recently had the pleasure of working with Hasaaj Buildings and Marketing for my real estate needs and I couldn't be happier with the experience. From start to finish, their team was professional, knowledgeable, and dedicated to helping me find the perfect property. Their marketing strategies were top-notch, showcasing my property in the best possible light and attracting potential buyers quickly. They were always available to answer any questions or concerns I had and provided valuable insights and advice throughout the entire process. Thanks to Hasaaj Buildings and Marketing, I was able to sell my property for a great price in a timely manner. I highly recommend their services to anyone looking to buy or sell real estate. Their expertise and commitment to their clients truly sets them apart in the industry. Thank you, Hasaaj Buildings and Marketing, for your exceptional work!",
  },
];
