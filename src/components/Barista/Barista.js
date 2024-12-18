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
                  <h4 className="text-white mb-0">{Barista.nama1}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.posisi1}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.pesan1}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src={`data:image/jpeg;base64,${Barista.foto1}`}
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
                  <h4 className="text-white mb-0">{Barista.nama2}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.posisi2}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.pesan2}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src={`data:image/jpeg;base64,${Barista.foto2}`}
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
                  <h4 className="text-white mb-0">{Barista.nama3}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.posisi3}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.pesan3}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src={`data:image/jpeg;base64,${Barista.foto3}`}
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
                  <h4 className="text-white mb-0">{Barista.nama4}</h4>
                  <p className="badge ms-4">
                    <em>{Barista.posisi4}</em>
                  </p>
                </div>
                <p className="text-white mb-0">{Barista.pesan4}</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src={`data:image/jpeg;base64,${Barista.foto4}`}
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
