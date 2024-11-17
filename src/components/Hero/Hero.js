import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Hero = () => {
  const [Hero, setHero] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const NavbarRef = ref(db, "Hero/");
    onValue(
      NavbarRef,
      (snapshot) => {
        const data = snapshot.val();
        setHero(data);
      },
      []
    );
  });
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mx-auto">
            <em className="small-text">{Hero.opening}</em>
            <h1>{Hero.nama}</h1>
            <p className="text-white mb-4 pb-lg-2">
              {Hero.text1}
              <em>{Hero.text2}</em>
              {Hero.text3}
            </p>{" "}
            <a
              className="btn custom-btn custom-border-btn smoothscroll me-3"
              href="#section_2"
            >
              {Hero.button1}
            </a>{" "}
            <a
              className="btn custom-btn smoothscroll me-2 mb-2"
              href="#section_3"
            >
              <strong>{Hero.button2}</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-slides vegas-container" style={{ padding: 0 }}>
        <div
          className="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out"
          style={{ transition: "1000ms" }}
        >
          <div
            className="vegas-slide-inner vegas-animation-kenburns"
            style={{
              backgroundImage:
                'url("images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg")',
              backgroundColor: "rgba(0, 0, 0, 0)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              animationDuration: "5000ms",
            }}
          />
        </div>
        <div
          className="vegas-slide vegas-transition-fade vegas-transition-fade-in"
          style={{ transition: "1000ms" }}
        >
          <div
            className="vegas-slide-inner vegas-animation-kenburns"
            style={{
              backgroundImage:
                'url("images/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg")',
              backgroundColor: "rgba(0, 0, 0, 0)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              animationDuration: "5000ms",
            }}
          />
        </div>
        <div className="vegas-content-scrollable">
          <div
            className="vegas-content"
            style={{ overflow: "visible", padding: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
