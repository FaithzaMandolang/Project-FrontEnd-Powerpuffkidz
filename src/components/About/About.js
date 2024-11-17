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
            <h2 className="text-white mb-3">{About.judul}</h2>

            <p className="text-white">{About.paragraf1}</p>

            <p className="text-white">{About.paragraf2}</p>

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
