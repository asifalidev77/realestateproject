import Link from "next/link";
import MainNavBar from "../_components/MainNavBar";
import Footer from "../_components/Footer";

export default function About() {
  return (
    <>
      <div className=" w-full">
        <MainNavBar />
      </div>
      <div className="flex lg:flex-row flex-col-reverse  w-[100%] px-[20px] md:px-[50px] lg:px-[86px] my-[40px]">
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em] w-[100%]">
            About Us
          </h1>
          <h3 className="text-[#909090] text-[25px] font-medium">Who We Are?</h3>
          <p className="font-normal text-[23px] leading-[28px] pr-[20px]">
          Titanium Agency & Homes is a premium real estate consultant and marketing professionals platform where we sell and market properties. We are a team of hard-working and dedicated individuals who are constantly aiming to bring the best opportunities and deals for our members.<br />
We bring the best offers and news from the top projects for you to keep up with all the good things happening around so you stay ahead of everyone else. So, if a great opportunity arises we will make sure you will be the first ones to get benefits from that.
          </p>
          <Link href="/contact-us"> 
          <button className="text-black p-[10px] lg:p-[12px] border-[1px] rounded-[8px] font-[600] text-[18px] mt-[30px] hover:!text-[#FF9D00] hover:!border-[#FF9D00] duration-[5s]">
            Read More
          </button> </Link>
        </div>
        <div className="w-[100%] lg:w-[50%] content-center">
          <img src="/aboutusimage.png" alt="aboutimage" 
          className="w-[100%] object-cover "/>
        </div>
      </div>
      <Footer />
    </>
  );
}
