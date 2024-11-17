import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [Navbar, setNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const NavbarRef = ref(db, "Navbar");
    onValue(
      NavbarRef,
      (snapshot) => {
        const data = snapshot.val();
        setNavbar(data);
      },
      []
    );
  });
  return (
    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: 149 }}>
      <nav className="navbar navbar-expand-lg" style={{}}>
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="index.html"
          >
            <img
              src="images/coffee-beans.png" //convert jdi base64
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
                <a className="nav-link click-scroll active" href="#section_1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_2">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_3">
                  Our Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_4">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_5">
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
    </div>
  );
};

export default Navbar;
