import Link from "next/link";
import Navbar from "./NavBar";
import Image from "next/image";
import heroimage from "../_assets/png/herosectionimage.png";
export default function HeroSection() {
    return (
      <>
      <div className="bg-[#18202A] w-full  ">
        <div className=" w-full">
        <Navbar/>
        </div>
        <div className="flex  flex-col md:flex-row  md:justify-center md:items-center w-[100%] ">
          <div className="w-[100%] md:w-[60%] lg:w-[70%]  px-[20px] md:ps-[50px] lg:ps-[86px]  md:content-center ">
          <h1 className="text-white font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em]">
          Buy Property in <span className="text-[#FF9D00]" > Pakistan</span>  with <span className="text-[#ff9d00]">Experts</span>
          </h1>
          <p className="font-normal text-sm leading-[1.3em] text-white py-[10px] md:py-[15px] lg:py-[20px] lg:w-[73%] w-100%">
          Welcome to Land Holders, where we build dreams into towering realities. At Land Holders, we specialize in the development of high-rise buildings, crafting exceptional spaces that redefine skylines and enhance communities.
          </p>
          <Link href="/contact-us">
          <button className="text-white p-[10px] lg:p-[12px] border-[1px] rounded-[8px] font-[600] text-[18px] mt-[30px] hover:!text-[#FF9D00] hover:!border-[#FF9D00]" >Book Now</button> </Link> 
          </div>
          <div className="lg:w-[847.63px] md:w-[560px] sm:w-[460px] lg:h-[630px] md:h-[400px] sm:h-[300px] h-72 w-[85%] relative self-end mt-5 md:mt-0 mb-0"  >
          <Image
      src={heroimage}
      alt="Description"
      layout="fill"
      className= "md:absolute   right-0 bottom-0"
    />
          </div>
        </div>
      </div>
       </>
    );
  }