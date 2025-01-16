import logowhite from "../_assets/svg/logowhite.svg";
import addressIcon from "../_assets/svg/location.svg";
import emailIcon from "../_assets/svg/email-icon.svg";
import fb from "../_assets/svg/fb-icon.svg";
import insta from "../_assets/svg/instagram-icon.svg";
import twitter from "../_assets/svg/twitter icon.svg";
import phoneIcon from "../_assets/svg/phone.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <>
  <section className="bg-[#18202A] h-auto w-[100%] flex flex-col  flex-wrap lg:flex-nowrap md:flex-row px-[20px] md:px-[50px] lg:px-[86px] py-[50px] md:gap-16 lg:gap-20 gap-1">
        <div className="w-[100%] md:w-[40%] lg:w-[30%] ">
          <Image
            src={logowhite}
            width={150}
            height={100}
            alt="White logo"
            className="pb-[20px] md-py-0"
          />
          <p className="text-white font-normal text-sm leading-[1.3em] w-[90%]">
            Hasaaj Developers &Marketing is a preemium real estate consultant
            and marketing professional platform where we sell and market
            propertise.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[30%] mt-[50px] md:mt-[0px]">
          <h3 className="text-white font-bold text-[25px] pb-[20px]">
            Contact Details
          </h3>
          <div className="flex">
            <div>
              <Image
                src={addressIcon}
                width={12.7}
                height={20}
                alt="Address icon"
                className="inline-block mr-[25px]"
              />
            </div>
            <div>
              <p className="text-white font-normal text-sm leading-[1.3em]">
                Adress: <br />
                392 F-Block, Johar Town, <br />
                Lahore, Pakistan
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                src={phoneIcon}
                width={12.7}
                height={20}
                alt="Address icon"
                className="inline-block mr-[25px]"
              />
            </div>
            <div>
              <p className="text-white font-normal text-sm leading-[1.3em]">
                Phone: <br />
                +92 117 178194
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                src={emailIcon}
                width={12.7}
                height={20}
                alt="Address icon"
                className="inline-block mr-[25px]"
              />
            </div>
            <div>
              <p className="text-white font-normal text-sm leading-[1.3em]">
                Email: <br />
                Example123@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%] lg:w-[20%] mt-[50px] md:mt-[0px]">
          <h3 className="text-white font-bold text-[25px] pb-[20px]">
            About Us
          </h3>
          <ul className="text-white text-[18px]">
            <li className="pb-[10px]">Our Team</li>
            <li className="pb-[10px]">Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[20%] my-[50px] md:my-0">
          <h3 className="text-white font-bold text-[25px] pb-[20px]">
            Follow us
          </h3>
          <Image
            src={fb}
            alt="facebook icon"
            width={34}
            height={34}
            className="inline-block mr-[15px]"
          />
          <Image
            src={insta}
            alt="instagram icon"
            width={34}
            height={34}
            className="inline-block mr-[15px]"
          />
          <Image
            src={twitter}
            alt="twitter icon"
            width={34}
            height={34}
            className="inline-block"
          />
        </div>
      </section>
      <div className="bg-[#18202A] text-center w-[100%] text-white py-[20px]">
        <p className="text-white text-sm"> © All Rights Reserved.</p>
      </div>
    </>
  );
}
