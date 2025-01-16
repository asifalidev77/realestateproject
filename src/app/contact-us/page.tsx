import Image from "next/image";
import MainNavBar from "../_components/MainNavBar";
import Footer from "../_components/Footer";
import addressIcon from "../_assets/svg/location.svg";
import emailIcon from "../_assets/svg/email-icon.svg";
import phoneIcon from "../_assets/svg/phone.svg";
export default function contactUs() {
  return (
    <>
      <MainNavBar />
      <div className="px-[20px] md:px-[50px] lg:px-[86px] w-[100%] h-auto lg:h-[50vh] flex flex-col-reverse lg:flex-row justify-center align-middle my-[30px]">
        <div className="bg-[#18202A] w-full lg:w-[45%] xl:w-[35%] px-9 pb-32 pt-9 h-auto lg:h-[40vh] rounded-[15px] p-[15px] flex flex-col justify-evenly relative">
          <div>
            <h3 className="font-medium text-white text-[25.23px]">
              Contact Information
            </h3>
            <p className="font-normal text-[#C9C9C9] text-[17.5px]">
              Say Something to start a live chat!
            </p>
          </div>
          <div className="mt-[50px]">
            <div className="flex py-[25px]">
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
                <p className="text-white font-normal text-sm leading-[1.5em]">
                132 Dartmouth Street Boston, <br />Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className="flex pb-[25px]">
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
                  Example123@gmail.com
                </p>
              </div>
            </div>
          </div>
          <img src="/circle.svg" alt="circle"
          className="w-[152.55px] h-[151.52px] absolute right-0 bottom-0"
           />
        </div>
        <div className="w-full lg:w-[55%] xl:w-[64%] p-[8px] md:p-[15px] lg:p-[50px]  grid gird-cols-1 lg:grid-cols-2">
          <div>
            <div>
              <label htmlFor="first-name" className="text-black">Frist Name </label>{" "}
            </div>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="border-b border-black w-[95%]"
            />
          </div>
          <div>
            <div>
              <label htmlFor="last-name"> Last Name </label>{" "}
            </div>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="given-name"
              className="border-b border-black w-[95%]"
            />
          </div>
          <div>
            <div>
              <label htmlFor="e-mail">Email </label>{" "}
            </div>
            <input
              id="e-mail"
              name="e-mail"
              type="mail"
              autoComplete="given-name"
              className="border-b border-black w-[95%]"
            />
          </div>
          <div>
            <div>
              <label htmlFor="phone-number">Phone Number </label>{" "}
            </div>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              placeholder="+1 012 3456 789"
              autoComplete="given-name"
              className="border-b border-black w-[95%]"
            />
          </div>
          <div className="col-span-2">
            <div>
              <label htmlFor="message">Message</label>{" "}
            </div>
            <textarea
              id="message"
              className="border-b border-black w-full"
            >
              {" "}
            </textarea>
          </div>
          <div className="text-end col-span-2">
            <button
              type="submit"
              className="rounded-md bg-black px-[18.42px] py-[15.42px] text-[23.13px] font-normal text-white shadow-sm hover:bg-[#FF9D00]"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
