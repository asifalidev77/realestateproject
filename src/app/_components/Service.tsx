import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface servicesProps {
    icon: StaticImageData | string;
    heading: string;
    paragraph: string;
    btn: string
    imageSrc: StaticImageData | string;
    
  }
export default function Service({icon, heading, btn, paragraph, imageSrc} : servicesProps) {
    return (
          <>
              
                <div style={{ backgroundImage: `url(${imageSrc})` }}
      className=" bg-cover bg-center  rounded-t-[10px] text-white relative p-[20px] h-[25vh]">
        {/* <div className="absolute inset-0 bg-black  rounded-t-[10px] shadow-lg opacity-[0.09]"></div> */}
                    <Image src={icon} alt="hello"/>
                    <h3 className="font-semibold text-[27px] leading-[1em] py-[5px]  text-white">{heading}</h3>
                    <button className=" border-[1px]  p-[10px] rounded-[8px] hover:!border-[#FF9D00] hover:text-[#ff9c00] mt-[5px] cursor-pointer">
                      <Link href="/services/Construction-Services/residential-construction">
                      {btn} </Link></button>
                </div>
                <div className="bg-[#FFFEFE] rounded-b-[10px] shadow-lg p-[20px] sm:h-[16vh] lg:h-[18vh] xl:h-[15vh]">
                    <p className="text-[14px] leading-[20px] text-ellipsis">{paragraph}</p>
                </div>
              
               </>        
    )
}