const Home = () => {
  return (
    <div>
      <main>
        {/*componen navbar*/}

        {/*componen hero/header : ini yg msh error*/}
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
        {/*componen about*/}

        {/*componen barista*/}

        {/*componen menu*/}

        {/*componen review/testi*/}
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
        {/*componen contactus*/}
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
        {/*componen footer*/}
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
