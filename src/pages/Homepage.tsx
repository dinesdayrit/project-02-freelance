import MainNav from "@/components/common/MainNav";
import About from "@/components/homepage/About";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import Products from "@/components/homepage/Products";


const Homepage = () => {
  return (
    <div>   
        <MainNav />
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage
