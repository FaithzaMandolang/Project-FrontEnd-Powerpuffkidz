const Navbar = () => {
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
            Barista {/*ini se mso */}
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
                  Home {/*ini se mso */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_2">
                  About {/*ini se mso */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_3">
                  Our Menu {/*ini se mso */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_4">
                  Reviews {/*ini se mso */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll inactive" href="#section_5">
                  Contact {/*ini se mso */}
                </a>
              </li>
            </ul>
            <div className="ms-lg-3">
              <a
                className="btn custom-btn custom-border-btn"
                href="reservation.html"
              >
                Reservation {/*ini se mso */}
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
