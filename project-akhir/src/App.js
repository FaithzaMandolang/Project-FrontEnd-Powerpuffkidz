import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home";
import Menu from "./components/menu/menu";
import Reservation from "./components/reservation/reservation";
import Service from "./components/service/service";
import Testimonial from "./components/testimonial/testimonial";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Menu />
      <Testimonial />
      <Service />
      <Reservation />
    </div>
  );
};

export default App;
