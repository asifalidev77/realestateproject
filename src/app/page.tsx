import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import FeatureCard from "./_components/FeatureCard";
import featureimg1 from "./_assets/png/feature1.png";
import featureimg2 from "./_assets/png/feature2.png";
import featureimg3 from "./_assets/png/feature3.png";
import PropertyExpert from "./_components/PropertyExpert";
import PropertyCarousel from "./_components/Properties"
import Testimonial from "./_components/Testimoninal";
export default function Home() {

  return (
    <>
      <HeroSection />
      <div className="max-w[100%] my-[20px] flex flex-col md:flex-row xl:gap-[80px]  lg:gap-[40px] md:gap-[20px] gap-[10px] lg:justify-center items-center h-auto px-[20px] md:px-[30px] lg:px-[86px]">
        <FeatureCard
          imageSrc={featureimg1}
          heading="Buy & Sell of Properties"
          paragraph="If you are looking to invest your money in a plot, pre-made houses, or commercial shops we have extensive plans for our customers for all their needs. We also help them with personalized investment plans."
        />
        <FeatureCard
          imageSrc={featureimg2}
          heading="Overseas Clients"
          paragraph="We are offering our services to our overseas customers who are looking forward to investing in Pakistan. We provide services as well as we have a dedicated office in London, to personally deal with all your queries."
        />
        <FeatureCard
          imageSrc={featureimg3}
          heading="Investment Plans"
          paragraph="We are offering our services to our overseas customers who are looking forward to investing in Pakistan. We provide services as well as we have a dedicated office in London, to personally deal with all your queries."
        />
      </div>
      <PropertyCarousel />
      <Testimonial/>
      <PropertyExpert/>
      <Footer/>
    </>
  );
}

