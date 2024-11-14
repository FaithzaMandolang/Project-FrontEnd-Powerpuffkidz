import About from "./About/About";
import Barista from "./Barista/Barista";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";
import Review from "./Review/Review";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div>
      <main>
        {/*componen navbar*/}
        <Navbar />
        {/*componen hero/header : ini yg msh error*/}
        <Hero />
        {/*componen about*/}
        <About />
        {/*componen barista*/}
        <Barista />
        {/*componen menu*/}
        <Menu />
        {/*componen review/testi*/}
        <Review />
        {/*componen contactus*/}
        <ContactUs />
        {/*componen footer*/}
        <Footer />
      </main>
      {/* JAVASCRIPT FILES */}
    </div>
  );
};

export default Home;
