import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Barista = () => {
  const [Barista, setBarista] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const BaristaRef = ref(db, "Barista/");
    onValue(
      BaristaRef,
      (snapshot) => {
        const data = snapshot.val();
        setBarista(data);
      },
      []
    );
  });
  return (
    <section
      className="barista-section section-padding section-bg"
      id="barista-team"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
            <em className="text-white">{Barista.opening1}</em>
            <h2 className="text-white">{Barista.opening2}</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">{Barista.barista1.name}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.barista1.position}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.barista1.pesan}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/team/portrait-elegant-old-man-wearing-suit.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">{Barista.barista2.name}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.barista2.position}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.barista2.pesan}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">{Barista.barista3.name}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.barista3.position}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.barista3.pesan}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/team/small-business-owner-drinking-coffee.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">{Barista.barista4.name}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.barista4.position}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.barista4.pesan}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/team/smiley-business-woman-working-cashier.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Barista;
