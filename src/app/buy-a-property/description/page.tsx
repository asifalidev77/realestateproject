import MainNavBar from "../../_components/MainNavBar";
import Footer from "../../_components/Footer";
export default function Silder6() {
return (
<> 
<MainNavBar />
<div className="flex w-[100%] h-[40vh] my-[30px] px-[20px] md:px-[50px] lg:px-[86px]">
    {/* <div className="w-[70%]">
        <img src="/property.jpg" alt="sliderImage" className="w-[880px] h-[460px]"/>
    </div>
    <div className="flex flex-col gap-5">
        <img src="/Residential6.webp" alt="sliderImage"
        className="w-[364px] h-[216px]"/>
        <img src="/Residential5.webp" alt="" 
        className="w-[364px] h-[216px]"/>
    </div> */}
</div>
<div className="flex flex-row justify-between w-[100%] h-auto align-middle px-[20px] md:px-[50px] lg:px-[86px]">
    <div className="w-[70%]">
    <div> <h3 className="text-[#2d2d2d] text-[40px] leading-[1.1em] font-semibold">3 Marla House for Sale in Alfalah Town, Lahore </h3></div>
    <div className="">
    <h3 className="text-[30px] leading-[1.1em] font-semibold text-[#2d2d2d]">pkr 2 Crore</h3>
    <h5>Added 2 hours ago</h5>
    <hr />
    <h3 className="text-[30px] leading-[1.1em] font-medium text-[#2d2d2d]">Description</h3>
    <p className="text-[20px] leading-[30px]"> AOA we have a kanal house in Alfalah P Block in good condition with 5 bed 6 back dual tv lounge dual drawing room dual kitchen storage londerry gerage. For More Info Contact At Call</p>
    <h3 className="text-[30px] leading-[1.1em] font-medium text-[#2d2d2d]">Condition</h3>
    <p className="text-[20px] leading-[30px]">Good - in a good shape, needs cosmetic updates</p>
    <hr />
</div>
</div>
    <div>
    <div className="flex gap-x-[17px] mt-[13px]">
            <div className="flex"><h6 className="font-normal text-[20px] text-[#4E4E4E]"><img src="/bed-icon.svg" alt="bed-icon" className="w-[18px] h-16px] inline-block mr-[10px]" /> 3</h6></div>
            <div className="flex"><h6 className="font-normal text-[20px] text-[#4E4E4E]"><img src="/bath-tub-icon.svg" alt="bed-icon" className="w-[18px] h-16px] inline-block mr-[10px]" />3</h6></div>
            <div className="flex"><h6 className="font-normal text-[20px] text-[#4E4E4E]"><img src="/arrowDiagnol.svg" alt="bed-icon" className="w-[18px] h-16px] inline-block mr-[10px]" />3</h6></div>
        </div>
        <div className="text-end mt-[5px]"><h6 className="font-semibold text-[20px] text-[#4E4E4E]">House</h6></div>
    </div>
</div>
<Footer />
</>
);
}