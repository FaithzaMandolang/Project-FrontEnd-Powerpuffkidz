import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [About, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const AboutRef = ref(db, "About/");
    onValue(
      AboutRef,
      (snapshot) => {
        const data = snapshot.val();
        setAbout(data);
      },
      []
    );
  });
  return (
    <section className="about-section section-padding" id="section_2">
      <div className="section-overlay" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="ratio ratio-1x1">
              <video autoPlay loop muted className="custom-video" poster>
                <source
                  src="videos/pexels-mike-jones-9046237.mp4"
                  type="video/mp4"
                />
                {About.info}
              </video>
              <div className="about-video-info d-flex flex-column">
                <h4 className="mt-auto">{About.since}</h4>

                <h4>{About.best}</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
            <em className="text-white">{About.nama}</em>
            <h2 className="text-white mb-3">{About.since}</h2>

            <p className="text-white">
              we believe that every cup of coffee tells a story. Born from our
              love of flavor and community, we created a space where the aroma
              of fresh coffee and delicious food blends with laughter and
              togetherness. Come in, unwind, and be a part of our story.
            </p>

            <p className="text-white">
              We take pride in serving the best from local farmers and carefully
              selected quality ingredients. Every dish is crafted with care,
              creating an experience that delights the palate and warms the
              soul.
            </p>

            <a
              href="#barista-team"
              className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
            >
              {About.btn1}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
