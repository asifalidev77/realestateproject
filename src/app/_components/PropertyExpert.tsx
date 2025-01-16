import Link from "next/link";
export default function PropertyExpert(){
    return(
        <>
        <section className="px-[20px] md:px-[50px] lg:px-[86px] text-center py-[40px]">
        <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em]">
        We Have
          </h1>
        <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em] w-[100%] m-auto">
        Professional Property <span className="text-[#ff9d00]">Experts</span>
          </h1>
          <p className="text-[#18202B] text-[23px] leading-[1.5rem] py-[15px] w-[100%] xl:w-[70%] m-auto">
          If you are looking to invest your money in a plot, pre-made houses, or commercial shops we have extensive plans for our customers for all their needs. We also help them with personalized investment plans.
          </p>
          <Link href="/contact-us"> 
          <button className="text-[#18202B] p-[10px] lg:p-[12px] border-[1px] border-black rounded-[8px] font-[600] text-[16px] mt-[30px] hover:!text-[#FF9D00] hover:!border-[#FF9D00]" >Book Now</button>
          </Link>
          
        </section>
        </>
    )
}