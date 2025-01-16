import MainNavBar from "../_components/MainNavBar";
import Footer from "../_components/Footer";
import BuyProperty from "./_components/BuyProperpty";
import ProperptyDetails from "./_components/PropertyDetails";
export default function Buy() {
  return (
    <>
      <MainNavBar />
      <div className="flex justify-end my-[30px] px-[20px] md:px-[50px] lg:px-[86px]">
        <div className="flex justify-between gap-3 sm:gap-6 w-full sm:w-[50%] py-[18px] sm:py-[27px] px-[18px] sm:px-[30px] lg:px-[3%] rounded-xl bg-[#F4F4F4]">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder-black text text-[25px] font-normal w-[89%] outline-none bg-transparent"
          />
          <img
            src="/search.png"
            alt="search-icon"
            className="w-[27px] h-[27px] object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="px-[20px] md:px-[50px] lg:px-[86px] mb-[50px] flex justify-between gap-y-6 flex-col xl:flex-row w-[100%]">
        <div className="flex static flex-wrap w-full gap-y-6 gap-x-6">
          <BuyProperty
            btntext="Buy"
            btnimg="/arrow-down.png"
            btnli1="All Residential"
            btnli2="Single Family Homes"
            btnli3="Townhomes"
            btnli4="Apartments"
            isSpecial="text-gray-700"
          />
          <BuyProperty
            btntext="Price"
            btnimg="/arrow-down.png"
            btnli1="Up to 10,000 PKR"
            btnli2="10,001 - 20,000 PKR"
            btnli3="20,001 - 30,000 PKR"
            btnli4="Above 30,000 PKR"
            isSpecial="text-gray-700"
          />
          <BuyProperty
            btntext="Size"
            btnimg="/arrow-down.png"
            btnli1="Small (up to 100 sq ft)"
            btnli2="Medium (101-250 sq ft)"
            btnli3="Large (251-500 sq ft)"
            btnli4="Extra Large (501+ sq ft)"
            isSpecial="text-gray-700"
          />
          <BuyProperty
            btntext="Bedroom"
            btnimg="/arrow-down.png"
            btnli1="1 Bedroom"
            btnli2="2 Bedroom"
            btnli3="3 Bedroom"
            btnli4="4 Bedroom"
            isSpecial="text-gray-700"
          />
          <BuyProperty
            btntext="Bathroom"
            btnimg="/arrow-down.png"
            btnli1="1 Bathroom"
            btnli2="2 Bathroomes"
            btnli3="3 Bathroom"
            btnli4="4 Bathroom"
            isSpecial="text-gray-700"
          />
          <BuyProperty
            btntext="More Filters"
            btnimg="/arrow-down.png"
            btnli1="All Residential"
            btnli2="Single Family Homes"
            btnli3="Townhomes"
            btnli4="Apartments"
            isSpecial="text-gray-700"
          />
        </div>
        <div className="flex-shrink-0 align-top"> 
          <BuyProperty
            btntext="New Listings"
            btnimg="/arrow-down.png"
            btnli1="List-1"
            btnli2="List-2"
            btnli3="List-3"
            btnli4="List-4"
            isSpecial="#ff9d00"
          />
        </div>
      </div>
      <div className="my-[30px] px-[20px] md:px-[50px] lg:px-[86px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-between">
        <ProperptyDetails
          type="House"
          price="PKR 90 lac"
          bed="3"
          bath="3"
          marala="3 Marla"
          location="Johar Town, Lahore"
          addtime="Added 2 hours ago"
        />
        <ProperptyDetails
          type="House"
          price="Pkr 1 crore"
          bed="3"
          bath="3"
          marala="5 Marla"
          location="Johar Town, Lahore"
          addtime="Added 2 hours ago"
        />
        <ProperptyDetails
          type="House"
          price="Pkr 2 crore"
          bed="9"
          bath="8"
          marala="10 Marla"
          location="Bahria Town, Lahore"
          addtime="Added 2 hours ago"
        />
        <ProperptyDetails
          type="House"
          price="PKR 60 lac"
          bed="3"
          bath="3"
          marala="3 Marla"
          location="Alfalah Town, Lahore"
          addtime="Added 2 hours ago"
        />
        <ProperptyDetails
          type="House"
          price="Pkr 3 crore"
          bed="4"
          bath="4"
          marala="4 Marla"
          location="Johar Town, Lahore"
          addtime="Added 2 hours ago"
        />
        <ProperptyDetails
          type="House"
          price="PKR 50 Lac"
          bed="9"
          bath="9"
          marala="10 Marla"
          location="Bahria Town, Lahore"
          addtime="Added 2 hours ago"
        />
      </div>
      <Footer />
    </>
  );
}
