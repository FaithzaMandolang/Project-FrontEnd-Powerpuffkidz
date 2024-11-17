import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [Footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const FooterRef = ref(db, "Footer/");
    onValue(
      FooterRef,
      (snapshot) => {
        const data = snapshot.val();
        setFooter(data);
      },
      []
    );
  });
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 me-auto">
            <em className="text-white d-block mb-4">{Footer.text1}</em>
            <strong className="text-white">
              <i className="bi-geo-alt me-2" />
              {Footer.text2}
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
            <em className="text-white d-block mb-4">{Footer.contact}</em>
            {/**/}
            <p className="d-flex mb-1">
              <strong className="me-2">{Footer.phone}</strong>
              {/**/}
              <a href="tel: 085339017033" className="site-footer-link">
                {Footer.number}
              </a>
            </p>
            <p className="d-flex">
              <strong className="me-2">{Footer.email}</strong> {/**/}
              <a
                href="mailto:faithzaazalia@gmail.com"
                className="site-footer-link"
              >
                {Footer.gmail}
              </a>
            </p>
          </div>
          <div className="col-lg-5 col-12">
            <em className="text-white d-block mb-4">{Footer.op}</em> {/**/}
            <ul className="opening-hours-list">
              <li className="d-flex">
                {Footer.mf}
                <span className="underline" />
                <strong>{Footer.hours1}</strong> {/**/}
              </li>
              <li className="d-flex">
                {Footer.saturday}
                <span className="underline" />
                <strong>{Footer.hours2}</strong> {/**/}
              </li>
              <li className="d-flex">
                {Footer.sunday}
                <span className="underline" />
                <strong>{Footer.hours3}</strong> {/**/}
              </li>
            </ul>
          </div>
          <div className="col-lg-8 col-12 mt-4">
            <p className="copyright-text mb-0">
              {Footer.copy}
              <a
                rel="sponsored noreferrer"
                href="https://www.tooplate.com"
                target="_blank"
              >
                {Footer.tooplate}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
