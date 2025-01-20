import MainNavBar from "../../_components/MainNavBar";
import Footer from "../../_components/Footer";
export default function Silder6() {
return (
<> 
<MainNavBar />
<div className="flex w-[100%] h-[40vh] my-[30px] px-[20px] md:px-[50px] lg:px-[86px]">
    <div className="w-[70%]">
        <img src="/property.jpg" alt="sliderImage" className="w-[880px] h-[460px]"/>
    </div>
    <div className="flex flex-col gap-5">
        <img src="/Residential6.webp" alt="sliderImage"
        className="w-[364px] h-[216px]"/>
        <img src="/Residential5.webp" alt="" 
        className="w-[364px] h-[216px]"/>
    </div>
</div>
<Footer />
</>
);
}