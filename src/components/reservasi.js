const Reservation = () => {
  return (
    <div>
      <main>
        {/*componen navbar:ini nnti import yg navbar dari index jo dpe komponen spya so nd mo bekg komponen yg baru ini*/}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand d-flex align-items-center"
              href="index.html"
            >
              <img
                src="images/coffee-beans.png"
                className="navbar-brand-image img-fluid"
                alt
              />
              Barista.co
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
                  <a className="nav-link" href="index.html#section_1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_2">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_3">
                    Our Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_4">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_5">
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
        {/*componen booking*/}

        {/*componen footer:ini leh sma dg navbar, nnti ambe yg di index*/}
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 me-auto">
                <em className="text-white d-block mb-4">Where to find us?</em>
                <strong className="text-white">
                  <i className="bi-geo-alt me-2" />
                  Bandra West, Mumbai, Maharashtra 400050, India
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
                  <a href="tel: 305-240-9671" className="site-footer-link">
                    (65) 305 2409 671
                  </a>
                </p>
                <p className="d-flex">
                  <strong className="me-2">Email:</strong>
                  <a
                    href="mailto:info@yourgmail.com"
                    className="site-footer-link"
                  >
                    hello@barista.co
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
                    <strong>11:00 - 16:30</strong>
                  </li>
                  <li className="d-flex">
                    Sunday
                    <span className="underline" />
                    <strong>Closed</strong>
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

export default Reservation;
