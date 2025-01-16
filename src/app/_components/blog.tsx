import Link from "next/link";
interface servicesProps {
  img: string;
  heading: string;
  paragraph: string;
  btn: string;
}
export default function Blog({ img, heading, btn, paragraph }: servicesProps) {
  return (
    <> 
      <div className="flex flex-col lg:flex-row gap-5 my-[20px] px-[20px] md:px-[50px] lg:px-[86px] py-[20px] lg:py-[50px] w-[100%] md:w-[90%] xl:w-[80%] m-auto">
        <div className="w-[100%] lg:w-[30%]">
           <img src={img} 
           alt="blog" 
           className="w-[100%] h-[100%] object-cover rounded-[20px]"/>
        </div>
        <div className="w-[100%] lg:w-[70%]">
            <h2 className="font-bold text-[30px] md:text-[35px] lg:text-[39px] leading-[1.1em]  text-black ">{heading}</h2>
            <p className="text-[14px] leading-[20px]"> {paragraph}</p>
            <Link href="/blog/blog-details"> 
            <button className="border-[1px]  text-black p-[10px] rounded-[8px] hover:!border-[#FF9D00] hover:text-[#ff9c00] mt-[5px]">{btn}</button> </Link>
        </div>
      </div>
    </>
  );
}
