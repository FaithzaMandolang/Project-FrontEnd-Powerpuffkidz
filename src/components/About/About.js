const About = () => {
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
                Your browser does not support the video tag. {/*ini*/}
              </video>
              <div className="about-video-info d-flex flex-column">
                <h4 className="mt-auto">We Started Since 2020.</h4>
                {/*ini*/}
                <h4>Best Cafe in Airmadidi.</h4>
                {/*ini*/}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
            <em className="text-white">Aksara.co</em> {/*ini*/}
            <h2 className="text-white mb-3">Aksara Cafe</h2>
            {/*ini*/}
            <p className="text-white">
              we believe that every cup of coffee tells a story. Born from our
              love of flavor and community, we created a space where the aroma
              of fresh coffee and delicious food blends with laughter and
              togetherness. Come in, unwind, and be a part of our story.
            </p>
            {/*ini bekg list baru. paragraf 1*/}
            <p className="text-white">
              We take pride in serving the best from local farmers and carefully
              selected quality ingredients. Every dish is crafted with care,
              creating an experience that delights the palate and warms the
              soul.
            </p>
            {/*ini. paragraf2*/}
            <a
              href="#barista-team"
              className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
            >
              Meet Baristas {/*ini*/}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
