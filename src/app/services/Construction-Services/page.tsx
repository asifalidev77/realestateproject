import MainNavBar from "../../_components/MainNavBar";
import Footer from "../../_components/Footer";
import Service from "../../_components/Service";
import icon1 from "../../_assets/png/icon.png";
import icon2 from "../../_assets/svg/commercial-icon.svg";
import icon3 from "../../_assets/svg/infrastructure-icon.svg";
import icon4 from "../../_assets/svg/Tools-icon.svg";
import icon5 from "../../_assets/svg/sixthcard-icon.svg";
import icon6 from "../../_assets/svg/renovation-icon.svg";

export default function services() {
  return (
    <>
      <div>
        <MainNavBar />
        <div className="px-[20px] md:px-[50px] lg:px-[86px] mt-[50px]">
          <h1 className="text-black font-bold text-[35px] md:text-[35px] lg:text-[60px] leading-[1.2em]">
            Construction Services
          </h1>
          <p className="text-[20px] leading-[30px]">
            At Hassaj Developers and Marketing, we specialize in delivering
            top-notch construction services tailored to meet the unique needs of
            our clients. Our commitment to excellence, attention to detail, and
            use of the latest construction technologies ensure that every
            project is completed to the highest standards.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-14 sm:grid-cols-2 grid-cols-1 px-[20px] md:px-[50px] lg:px-[86px] pb-[50px] pt-[20px] ">
        <div>
          <Service
            icon={icon1}
            heading="Residentail Construction:"
            btn="Read More"
            paragraph="Whether you're building your dream home from the ground up or renovating an existing property, our experienced team will work with you every step of the way. We provide custom solutions to bring your vision to life, ensuring that every detail aligns with your preferences and lifestyle."
            imageSrc="/bgResidential.f569a07d.png"
          />
        </div>
        <div>
          <Service
            icon={icon2}
            heading="Commercial Construction:"
            btn="Read More"
            paragraph="We understand the complexities involved in commercial construction projects. Our team is equipped to handle everything from office buildings to retail spaces, delivering functional and aesthetically pleasing environments that meet your business needs."
            imageSrc="/bgCommercial.7f195526.png"
          />
        </div>
        <div >
          <Service
            icon={icon3}
            heading="Infrastructure Development:"
            btn="Read More"
            paragraph="Our expertise extends to infrastructure projects, including roads, bridges, and public facilities. We employ cutting-edge techniques and materials to ensure durability and sustainability in all our developments."
            imageSrc="/bgInfrastructure.a91b1e11.png"
          />
        </div>

        <div >
          <Service
            icon={icon4}
            heading="Project Management:"
            btn="Read More"
            paragraph="Effective project management is crucial for the successful completion of any construction project. Our dedicated project managers oversee all aspects of the construction process, from planning and budgeting to execution and quality control, ensuring that your project is completed..."
            imageSrc="/bgTools.c3746ed0.png"
          />
        </div>
        
        <div >
          
          <Service
            icon={icon5}
            heading="Renovation and Remodeling:"
            btn="Read More"
            paragraph="Transform your existing spaces with our renovation and remodeling services. Whether it's updating a kitchen,  adding an extension, or overhauling an entire building, we bring creativity and expertise to enhance your property's functionality and value."
            imageSrc="/bgRenovation.bcaaca8b.png"
          />
        </div>
        <div>
          <Service
            icon={icon6}
            heading="Green Building Solutions:"
            btn="Read More"
            paragraph="We are committed to sustainable construction practices. Our green building solutions incorporate energy-efficient materials and technologies to minimize environmental impact while maximizing comfort and cost savings for our clients."
            imageSrc="/bgSixthCard.90c064b1.png"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
