import Blog from "../_components/blog"
import MainNavBar from "../_components/MainNavBar";
import Footer from "../_components/Footer";
export default function blogPage() {
    return (
      <>
      <div>
        <MainNavBar/>
      </div>
        <Blog
        img= "/men-women.svg"
        heading= "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights" 
        paragraph ="The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges."
        btn = "Read More"
        />
         <Blog
        img= "/blog-2.svg"
        heading= "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights" 
        paragraph ="The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges."
        btn = "Read More"
        />
         <Blog
        img= "/blog-3.svg"
        heading= "Unlocking the Secrets to Finding Your Dream Home: Expert Tips and Insights" 
        paragraph ="The journey to finding your dream home can be both exhilarating and overwhelming. Whether you're a first-time buyer or looking to upgrade, the real estate market presents numerous opportunities and challenges."
        btn = "Read More"
        />
      <Footer/>
      </>
    );
}