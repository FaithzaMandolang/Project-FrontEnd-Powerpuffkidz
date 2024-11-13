import Reservation from "./reservasi";
const Home = () => {
  return (
    <div>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand d-flex align-items-center"
              href="index.html"
            >
              <img
                src="images/coffee-beans.png"
                className="navbar-brand-image img-fluid"
                alt="Barista Cafe Template"
              />
              Aksara
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_2">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_3">
                    Our Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_4">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_5">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ms-lg-3">
                <a
                  className="btn custom-btn custom-border-btn"
                  href="reservation.html"
                >
                  Reservation
                  <i className="bi-arrow-up-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 mx-auto">
                <em className="small-text">welcome to Aksara.co</em>
                <h1>Aksara Cafe</h1>
                <p className="text-white mb-4 pb-lg-2">
                  your <em>favourite</em> coffee daily lives.
                </p>
                <a
                  className="btn custom-btn custom-border-btn smoothscroll me-3"
                  href="#section_2"
                >
                  Our Story
                </a>
                <a
                  className="btn custom-btn smoothscroll me-2 mb-2"
                  href="#section_3"
                >
                  <strong>Check Menu</strong>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-slides" />
        </section>
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
                    Your browser does not support the video tag.
                  </video>
                  <div className="about-video-info d-flex flex-column">
                    <h4 className="mt-auto">We Started Since 2020.</h4>
                    <h4>Best Cafe in Airmadidi.</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
                <em className="text-white">Aksara.co</em>
                <h2 className="text-white mb-3">Aksara Cafe</h2>
                <p className="text-white">
                  we believe that every cup of coffee tells a story. Born from
                  our love of flavor and community, we created a space where the
                  aroma of fresh coffee and delicious food blends with laughter
                  and togetherness. Come in, unwind, and be a part of our story.
                </p>
                <p className="text-white">
                  We take pride in serving the best from local farmers and
                  carefully selected quality ingredients. Every dish is crafted
                  with care, creating an experience that delights the palate and
                  warms the soul.
                </p>
                <a
                  href="#barista-team"
                  className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
                >
                  Meet Baristas
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="barista-section section-padding section-bg"
          id="barista-team"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                <em className="text-white">Creative Baristas</em>
                <h2 className="text-white">Meet People</h2>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0">Steve</h4>
                      <p className="badge ms-4">
                        <em>Boss</em>
                      </p>
                    </div>
                    <p className="text-white mb-0">
                      your favourite coffee daily lives tempor.
                    </p>
                  </div>
                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/portrait-elegant-old-man-wearing-suit.jpg"
                      className="team-block-image img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0">Sandra</h4>
                      <p className="badge ms-4">
                        <em>Manager</em>
                      </p>
                    </div>
                    <p className="text-white mb-0">
                      your favourite coffee daily lives.
                    </p>
                  </div>
                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg"
                      className="team-block-image img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0">Jackson</h4>
                      <p className="badge ms-4">
                        <em>Senior</em>
                      </p>
                    </div>
                    <p className="text-white mb-0">
                      your favourite coffee daily lives.
                    </p>
                  </div>
                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/small-business-owner-drinking-coffee.jpg"
                      className="team-block-image img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0">Michelle</h4>
                      <p className="badge ms-4">
                        <em>Barista</em>
                      </p>
                    </div>
                    <p className="text-white mb-0">
                      your favourite coffee daily consectetur.
                    </p>
                  </div>
                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/smiley-business-woman-working-cashier.jpg"
                      className="team-block-image img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="menu-section section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                <div className="menu-block-wrap">
                  <div className="text-center mb-4 pb-lg-2">
                    <em className="text-white">Delicious Menu</em>
                    <h4 className="text-white">Breakfast</h4>
                  </div>
                  <div className="menu-block">
                    <div className="d-flex">
                      <h6>Pancakes</h6>
                      <span className="underline" />
                      <strong className="ms-auto">$12.50</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Fresh brewed coffee and steamed milk</small>
                    </div>
                  </div>
                  <div className="menu-block my-4">
                    <div className="d-flex">
                      <h6>Toasted Waffle</h6>
                      <span className="underline" />
                      <strong className="text-white ms-auto">
                        <del>$16.50</del>
                      </strong>
                      <strong className="ms-2">$12.00</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Brewed coffee and steamed milk</small>
                    </div>
                  </div>
                  <div className="menu-block">
                    <div className="d-flex">
                      <h6>
                        Fried Chips
                        <span className="badge ms-3">Recommend</span>
                      </h6>
                      <span className="underline" />
                      <strong className="ms-auto">$15.0</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Rich Milk and Foam</small>
                    </div>
                  </div>
                  <div className="menu-block my-4">
                    <div className="d-flex">
                      <h6>Pancakes</h6>
                      <span className="underline" />
                      <strong className="ms-auto">$12.50</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Fresh brewed coffee and steamed milk</small>
                    </div>
                  </div>
                  <div className="menu-block">
                    <div className="d-flex">
                      <h6>Banana Cakes</h6>
                      <span className="underline" />
                      <strong className="ms-auto">$18.0</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Rich Milk and Foam</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="menu-block-wrap">
                  <div className="text-center mb-4 pb-lg-2">
                    <em className="text-white">Favourite Menu</em>
                    <h4 className="text-white">Coffee</h4>
                  </div>
                  <div className="menu-block">
                    <div className="d-flex">
                      <h6>Latte</h6>
                      <span className="underline" />
                      <strong className="text-white ms-auto">
                        <del>$12.50</del>
                      </strong>
                      <strong className="ms-2">$7.50</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Fresh brewed coffee and steamed milk</small>
                    </div>
                  </div>
                  <div className="menu-block my-4">
                    <div className="d-flex">
                      <h6>
                        White Coffee
                        <span className="badge ms-3">Recommend</span>
                      </h6>
                      <span className="underline" />
                      <strong className="ms-auto">$5.90</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Brewed coffee and steamed milk</small>
                    </div>
                  </div>
                  <div className="menu-block">
                    <div className="d-flex">
                      <h6>Chocolate Milk</h6>
                      <span className="underline" />
                      <strong className="ms-auto">$5.50</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Rich Milk and Foam</small>
                    </div>
                  </div>
                  <div className="menu-block my-4">
                    <div className="d-flex">
                      <h6>Greentea</h6>
                      <span className="underline" />
                      <strong className="ms-auto">$7.50</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Fresh brewed coffee and steamed milk</small>
                    </div>
                  </div>
                  <div className="menu-block">
                    <div className="d-flex">
                      <h6>Dark Chocolate</h6>
                      <span className="underline" />
                      <strong className="ms-auto">$7.25</strong>
                    </div>
                    <div className="border-top mt-2 pt-2">
                      <small>Rich Milk and Foam</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="reviews-section section-padding section-bg"
          id="section_4"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                <em className="text-white">Reviews by Customers</em>
                <h2 className="text-white">Testimonials</h2>
              </div>
              <div className="timeline">
                <div className="timeline-container timeline-container-left">
                  <div className="timeline-content">
                    <div className="reviews-block">
                      <div className="reviews-block-image-wrap d-flex align-items-center">
                        <img
                          src="images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg"
                          className="reviews-block-image img-fluid"
                          alt
                        />
                        <div className>
                          <h6 className="text-white mb-0">Grace</h6>
                          <em className="text-white"> Customers</em>
                        </div>
                      </div>
                      <div className="reviews-block-info">
                        <p>
                          The atmosphere at Aksara Cafe is simply unbeatable!
                          The coffee is always rich and flavorful, and the staff
                          makes you feel right at home. It’s my favorite spot to
                          relax and catch up with friends. Highly recommend
                        </p>
                        <div className="d-flex border-top pt-3 mt-4">
                          <strong className="text-white">
                            4.5 <small className="ms-2">Rating</small>
                          </strong>
                          <div className="reviews-group ms-auto">
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-container timeline-container-right">
                  <div className="timeline-content">
                    <div className="reviews-block">
                      <div className="reviews-block-image-wrap d-flex align-items-center">
                        <img
                          src="images/reviews/senior-man-white-sweater-eyeglasses.jpg"
                          className="reviews-block-image img-fluid"
                          alt
                        />
                        <div className>
                          <h6 className="text-white mb-0">Fahjrikun</h6>
                          <em className="text-white"> Customers</em>
                        </div>
                      </div>
                      <div className="reviews-block-info">
                        <p>
                          bsolutely love this place! The pastries are to die
                          for, and the coffee is the perfect pick-me-up. The
                          cozy vibe and friendly service keep me coming back
                          week after week. A true hidden gem!
                        </p>
                        <div className="d-flex border-top pt-3 mt-4">
                          <strong className="text-white">
                            4.5 <small className="ms-2">Rating</small>
                          </strong>
                          <div className="reviews-group ms-auto">
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-container timeline-container-left">
                  <div className="timeline-content">
                    <div className="reviews-block">
                      <div className="reviews-block-image-wrap d-flex align-items-center">
                        <img
                          src="images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg"
                          className="reviews-block-image img-fluid"
                          alt
                        />
                        <div className>
                          <h6 className="text-white mb-0">Faithza</h6>
                          <em className="text-white"> Customers</em>
                        </div>
                      </div>
                      <div className="reviews-block-info">
                        <p>
                          This cafe never disappoints! The ambiance is perfect
                          for working or just unwinding with a book. The
                          attention to detail in every cup of coffee is amazing,
                          and the staff’s warmth makes every visit special.
                        </p>
                        <div className="d-flex border-top pt-3 mt-4">
                          <strong className="text-white">
                            4.5 <small className="ms-2">Rating</small>
                          </strong>
                          <div className="reviews-group ms-auto">
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star-fill" />
                            <i className="bi-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <em className="text-white">Say Hello</em>
                <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
              </div>
              <div className="col-lg-6 col-12">
                <form
                  action="#"
                  method="post"
                  className="custom-form contact-form"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <label htmlFor="name" className="form-label">
                        Name <sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Faithza"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="faithza@gmail.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-12 mx-auto mt-3">
                    <button type="submit" className="form-control">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
                <iframe
                  className="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth"
                  width="100%"
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 me-auto">
                <em className="text-white d-block mb-4">Where to find us?</em>
                <strong className="text-white">
                  <i className="bi-geo-alt me-2" />
                  Airmadidi, Sulawesi Utara, Indonesia
                </strong>
                <ul className="social-icon mt-4">
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-facebook"></a>
                  </li>
                  <li className="social-icon-item">
                    <a
                      href="https://x.com/minthu"
                      target="_new"
                      className="social-icon-link bi-twitter"
                    ></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-whatsapp"></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
                <em className="text-white d-block mb-4">Contact</em>
                <p className="d-flex mb-1">
                  <strong className="me-2">Phone:</strong>
                  <a href="tel: 085339017033" className="site-footer-link">
                    085339017033
                  </a>
                </p>
                <p className="d-flex">
                  <strong className="me-2">Email:</strong>
                  <a
                    href="mailto:faithzaazalia@gmail.com"
                    className="site-footer-link"
                  >
                    Aksara@gmail.co
                  </a>
                </p>
              </div>
              <div className="col-lg-5 col-12">
                <em className="text-white d-block mb-4">Opening Hours.</em>
                <ul className="opening-hours-list">
                  <li className="d-flex">
                    Monday - Friday
                    <span className="underline" />
                    <strong>9:00 - 18:00</strong>
                  </li>
                  <li className="d-flex">
                    Saturday
                    <span className="underline" />
                    <strong>Closed</strong>
                  </li>
                  <li className="d-flex">
                    Sunday
                    <span className="underline" />
                    <strong>11:00 - 16:30</strong>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 col-12 mt-4">
                <p className="copyright-text mb-0">
                  Copyright © Barista Cafe 2048 - Design:{" "}
                  <a
                    rel="sponsored noreferrer"
                    href="https://www.tooplate.com"
                    target="_blank"
                  >
                    Tooplate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
      {/* JAVASCRIPT FILES */}
    </div>
  );
};

export default Home;
