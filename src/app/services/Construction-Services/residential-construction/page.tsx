import MainNavBar from "../../../_components/MainNavBar";
import Footer from "../../../_components/Footer";
import Link from "next/link";
export default function residentialConstruction() {
  return (
    <>
      <MainNavBar />
      <div>
      <div className="text-white w-[100%] h-[40vh]  text-center mx-auto bg-no-repeat bg-cover content-center flex items-center justify-center relative before:bg-black before:opacity-70 before:absolute  before:w-full before:h-full"
       style={{ backgroundImage: "url('/bgConstruction.png')" }}
       >
        <div className="text-white text-center w-3/5 flex flex-col gap-y-[12px] z-30">
        <h1 className="md:font-bold lg:text-[61px] md:text-[37px] lg:leading-[74px] md:leading-[60px] font-medium text-[32px] leading-[32px]">Residential Construction</h1>
        <p className="md:font-medium lg:text-[28px] md:text-[22px] text-center leading-[24px] lg:leading-[36px] m-auto w-[85%]">Get Design-Build Services for all types of Residential Buildings at Affordable in Pakistan</p>
        <div>
        <button className="lg:text-lg lg:font-bold md:text-x border md:font-medium border-white rounded-lg p-[12px] relative hover:text-[#FF9D00]">
          
        <Link href="/contact-us">Contact Us </Link></button> </div>
        </div>
      </div>
      </div>
      <div className="bg-[#6b6a6a26] mb-[100px] rounded-[23px] border border-transparent m-auto w-[90%]  mt-[-30px] z-50 relative">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[90%]  py-[70px] gap-7">
        <div className="flex flex-col items-center gap-6  m-auto pt-[35px] pb-[35px] bg-white text-center rounded-[17px] py-[53px] px-[35px]">
            <img src="/three-home-icon.svg" alt="" />
            <h3 className="font-semibold lg:text-[27px] text-center text-2xl leading-7">
            Custom Home Building
            </h3>
            <p className="lg:font-medium lg:text-[16px] text-center md:text-xs ms:font-medium">We specialize in custom home building, allowing you to design every detail of your new home. From initial blueprints to the final touches, our experienced team works closely with you to ensure your home reflects your unique style and needs.</p>
        </div>
        <div className="flex flex-col items-center gap-6  m-auto pt-[35px] pb-[35px] bg-white text-center rounded-[17px] py-[53px] px-[35px]">
            <img src="/three-home-icon.svg" alt="" />
            <h3 className="font-semibold lg:text-[27px] text-center text-2xl leading-7">
            Renovations and Additions
            </h3>
            <p className="lg:font-medium lg:text-[16px] text-center md:text-xs ms:font-medium">Whether youre looking to update an existing space or add new features to your home, we provide comprehensive renovation and addition services. Our skilled craftsmen ensure that all changes blend seamlessly with your current home design.</p>
        </div>
        <div className="flex flex-col items-center gap-6  m-auto pt-[35px] pb-[35px] bg-white text-center rounded-[17px] py-[53px] px-[35px]">
            <img src="/three-home-icon.svg" alt="" />
            <h3 className="font-semibold lg:text-[27px] text-center text-2xl leading-7">
            Quality and Craftsmanship:
            </h3>
            <p className="lg:font-medium lg:text-[16px] text-center md:text-xs ms:font-medium leading-3">We prioritize quality and craftsmanship in every project. Using the finest materials and advanced construction techniques, we build homes that are not only beautiful but also durable and energy-efficient.</p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
