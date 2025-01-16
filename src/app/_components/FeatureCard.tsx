// import Image from "next/image";
import Image, { StaticImageData } from "next/image";
interface FeatureCardProps {
    imageSrc: StaticImageData | string;
    heading: string;
    paragraph: string;
    
  }
export default function FeatureCard ({imageSrc, heading, paragraph} : FeatureCardProps) {

    return(
        <div className="py-[25px] md:py-[40px] lg:py-[59px] px-[34px] md:px-[20px] w-[100%] md:w-[33%] flex  flex-col items-center ">
            <Image src={imageSrc} alt="" width={100} height={100} />
            <h3 className="text-center font-semibold text-[18px] leading-[1rem] text-black py-[10px]"> {heading} </h3>
            
            <p className="text-center font-normal text-sm leading-[1rem] text-black ">{paragraph}</p>
        </div>
    );
}
