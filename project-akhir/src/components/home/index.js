const Home = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>AKSARA - Coffee Shop</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free Website Template" name="keywords" />
      <meta content="Free Website Template" name="description" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      {/* Libraries Stylesheet */}
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/style.min.css" rel="stylesheet" />
      {/* Navbar Start */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <a href="index.html" className="navbar-brand px-lg-4 m-0">
            <h1 className="m-0 display-4 text-uppercase text-white">AKSARA</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <a href="menu.html" className="nav-item nav-link">
                Menu
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu text-capitalize">
                  <a href="reservation.html" className="dropdown-item">
                    Reservation
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="blog-carousel"
          className="carousel slide overlay-bottom"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-primary font-weight-medium m-0">
                  We Have Been Serving
                </h2>
                <h1 className="display-1 text-white m-0">COFFEE</h1>
                <h2 className="text-white m-0">SINCE 2017</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-primary font-weight-medium m-0">
                  We Have Been Serving
                </h2>
                <h1 className="display-1 text-white m-0">COFFEE</h1>
                <h2 className="text-white m-0">SINCE 2017</h2>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#blog-carousel"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </a>
          <a
            className="carousel-control-next"
            href="#blog-carousel"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              About Us
            </h4>
            <h1 className="display-4">Serving Since 2017</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Story</h1>
              <h5 className="mb-3">
                The coffee shop we are developing offers a cozy and inviting
                atmosphere
              </h5>
              <p>
                with a variety of high-quality coffee options served with a
                unique touch, making it the perfect place to enjoy a relaxing
                time with friends or colleagues
              </p>
              <a
                href
                className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/about.png"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Vision</h1>
              <p>
                Our vision is to create a welcoming space where coffee lovers
                can experience exceptional flavors, connect with others, and
                enjoy moments of comfort and inspiration, all while promoting
                sustainability and supporting local communities.
              </p>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3" />
                Lorem ipsum dolor sit amet
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3" />
                Lorem ipsum dolor sit amet
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3" />
                Lorem ipsum dolor sit amet
              </h5>
              <a
                href
                className="btn btn-primary font-weight-bold py-2 px-4 mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Our Services
            </h4>
            <h1 className="display-4">Fresh &amp; Organic Beans</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/service-1.jpg"
                    alt
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-truck service-icon" />
                    Fastest Door Delivery
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/service-2.jpg"
                    alt
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-coffee service-icon" />
                    Fresh Coffee Beans
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/service-3.jpg"
                    alt
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-award service-icon" />
                    Best Quality Coffee
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/service-4.jpg"
                    alt
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-table service-icon" />
                    Online Table Booking
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Offer Start */}
      <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
        <div className="container py-5">
          <h1 className="display-3 text-primary mt-3">50% OFF</h1>
          <h1 className="text-white mb-3">Sunday Special Offer</h1>
          <h4 className="text-white font-weight-normal mb-4 pb-3">
            Only for Sunday from 1st Jan to 30th Jan 2045
          </h4>
          <form className="form-inline justify-content-center mb-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Your Email"
                style={{ height: 60 }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary font-weight-bold px-4"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Offer End */}
      {/* Menu Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Menu &amp; Pricing
            </h4>
            <h1 className="display-4">Competitive Pricing</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5">Hot Coffee</h1>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src="public/img/menu-1.jpg"
                    alt
                  />
                  <h5 className="menu-price">$5</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Black Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src="public/img/menu-2.jpg"
                    alt
                  />
                  <h5 className="menu-price">$7</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Chocolete Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src="public/img/menu-3.jpg"
                    alt
                  />
                  <h5 className="menu-price">$9</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Coffee With Milk</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">Cold Coffee</h1>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src="public/img/menu-1.jpg"
                    alt
                  />
                  <h5 className="menu-price">$5</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Black Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src="public/img/menu-2.jpg"
                    alt
                  />
                  <h5 className="menu-price">$7</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Chocolete Coffee</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src="public/img/menu-3.jpg"
                    alt
                  />
                  <h5 className="menu-price">$9</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Coffee With Milk</h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea
                    et et lorem dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}
      {/* Reservation Start */}
      <div className="container-fluid my-5">
        <div className="container">
          <div className="reservation position-relative overlay-top overlay-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 my-5 my-lg-0">
                <div className="p-5">
                  <div className="mb-4">
                    <h1 className="display-3 text-primary">30% OFF</h1>
                    <h1 className="text-white">For Online Reservation</h1>
                  </div>
                  <p className="text-white">
                    Lorem justo clita erat lorem labore ea, justo dolor lorem
                    ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                    justo sed sed diam. Ea et erat ut sed diam sea
                  </p>
                  <ul className="list-inline text-white m-0">
                    <li className="py-2">
                      <i className="fa fa-check text-primary mr-3" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2">
                      <i className="fa fa-check text-primary mr-3" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2">
                      <i className="fa fa-check text-primary mr-3" />
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="text-center p-5"
                  style={{ background: "rgba(51, 33, 29, .8)" }}
                >
                  <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                  <form className="mb-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <div
                        className="date"
                        id="date"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                          placeholder="Date"
                          data-target="#date"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div
                        className="time"
                        id="time"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                          placeholder="Time"
                          data-target="#time"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select bg-transparent border-primary px-4"
                        style={{ height: 49 }}
                      >
                        <option selected>Person</option>
                        <option value={1}>Person 1</option>
                        <option value={2}>Person 2</option>
                        <option value={3}>Person 3</option>
                        <option value={3}>Person 4</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block font-weight-bold py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reservation End */}
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Testimonial
            </h4>
            <h1 className="display-4">Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-1.jpg" alt />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <i>Profession</i>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum sanct clita
              </p>
            </div>
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-2.jpg" alt />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <i>Profession</i>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum sanct clita
              </p>
            </div>
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-3.jpg" alt />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <i>Profession</i>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum sanct clita
              </p>
            </div>
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-4.jpg" alt />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <i>Profession</i>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum sanct clita
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 3 }}
            >
              Get In Touch
            </h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2" />
              123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              +012 345 67890
            </p>
            <p className="m-0">
              <i className="fa fa-envelope mr-2" />
              info@example.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 3 }}
            >
              Follow Us
            </h4>
            <p>
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square"
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 3 }}
            >
              Open Hours
            </h4>
            <div>
              <h6 className="text-white text-uppercase">Monday - Friday</h6>
              <p>8.00 AM - 8.00 PM</p>
              <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
              <p>2.00 PM - 8.00 PM</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 3 }}
            >
              Newsletter
            </h4>
            <p>
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 25 }}
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary font-weight-bold px-3">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <p className="mb-2 text-white">
            Copyright ©{" "}
            <a className="font-weight-bold" href="#">
              Domain
            </a>
            . All Rights Reserved.
          </p>
          <p className="m-0 text-white">
            Designed by{" "}
            <a className="font-weight-bold" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Contact Javascript File */}
      {/* Template Javascript */}
    </div>
  );
};

export default Home;
