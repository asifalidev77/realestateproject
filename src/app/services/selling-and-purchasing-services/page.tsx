import MainNavBar from "../../_components/MainNavBar";
import Footer from "../../_components/Footer";
export default function blogPage() {
  return (
    <>
      <MainNavBar />
      <div className="px-[20px] md:px-[50px] lg:px-[86px] my-[30px]">
        <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em]">
          Selling & Purchasing Services
        </h1>
        <p className="text-[20px] leading-[30px] mb-[30px]">
          Hassaj Developers and Marketing offers comprehensive real estate
          services to help you navigate the complexities of buying and selling
          properties. Our team of experienced professionals is dedicated to
          providing personalized assistance, ensuring a seamless and successful
          transaction process.
        </p>
        <div className="relative bg-white">
        <img src="/Ellipse 796.png" alt="" 
          className="absolute z-[-2] left-[-50px] top-[20px] lg:left-[-59px] lg:top-[30px] w-[141px] h-[141px] lg:block hidden"/>
           <img src="/Ellipse 796.png" alt="" 
          className="absolute z-[-2] right-[-50px] bottom-[20px] lg:right-[-59px] lg:bottom-[30px] w-[141px] h-[141px] lg:block hidden"/>
        <div className="bg-[#93939326] w-[100%] h-auto py-[50px] md:py-[128px] px-[35px] md:px-[70px] rounded-[23px] backdrop-blur-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-middle gap-10">
      
          <div className="px:[16px] md:px-[36px] py:[30px] md:py-[60px] flex flex-col gap-[20px] justify-center align-middle bg-white rounded-[18px]  text-center h-[50vh]">
            <img src="/cuate.png" alt="" className="w-[196px] h-[197px] m-auto" />
            <h3 className="text-[#000] text-[22px] lg:text-[25px] xl:text-[29px] font-semibold leading-[1.2em]">Buy a property</h3>
            <p className="text-[#000] text-[17px] font-normal leading-[20px]">
              Discover your dream home where perfection and happiness intersect.
            </p>
            <button className="p-[8px] border-[1px] rounded-[5.31px] text-[#000] border-[#000] font-normal leading-[14.45px] text-[11.94px]  w-[125px] m-auto">Browse Properties
            </button>
          </div>
          <div className="px:[16px] md:px-[36px] py:[30px] md:py-[60px] flex flex-col gap-[20px] justify-center align-middle bg-white rounded-[18px] text-center h-[50vh]">
            <img src="/sale.png" alt="" className="w-[196px] h-[197px] m-auto" />
            <h3 className="text-[#000]  font-semibold leading-[1.2em] text-[22px] lg:text-[25px] xl:text-[29px]">Sell a property</h3>
            <p className="text-[#000] text-[17px] font-normal leading-[20px]">Invest smart, win big, irrespective of economic shifts.</p>
            <button className="p-[8px] border-[1px] rounded-[5.31px] text-[#000] border-[#000] font-normal leading-[14.45px] text-[11.94px] w-[104px] m-auto">Add Details</button>
          </div>
          <div className="px:[16px] md:px-[36px] py:[30px] md:py-[60px] flex flex-col gap-[20px] justify-center align-middle bg-white rounded-[18px] text-center h-[50vh]">
            <img src="/house.png" alt="" className="w-[196px] h-[197px] m-auto" />
            <h3 className="text-[#000] text-[22px] lg:text-[25px] xl:text-[29px] font-semibold leading-[1.2em]">Rent a property</h3>
            <p className="text-[#000] text-[17px] font-normal leading-[20px]">Discover a home where love fills every room</p>
            <button className="p-[8px] border-[1px] rounded-[5.31px] text-[#000] border-[#000] font-normal leading-[14.45px] text-[11.94px]  w-[104px] m-auto">Find Rentals</button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
