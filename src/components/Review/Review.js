import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Review = () => {
  const [Review, setReview] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ReviewRef = ref(db, "Review/");
    onValue(
      ReviewRef,
      (snapshot) => {
        const data = snapshot.val();
        setReview(data);
      },
      []
    );
  });
  return (
    <section
      className="reviews-section section-padding section-bg"
      id="section_4"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
            <em className="text-white">{Review.judul}</em>
            <h2 className="text-white">{Review.judul2}</h2>
          </div>
          <div className="timeline">
            <div className="timeline-container timeline-container-left">
              <div className="timeline-content">
                <div className="reviews-block">
                  <div className="reviews-block-image-wrap d-flex align-items-center">
                    <img
                      src={`data:image/jpeg;base64,${Review.foto1}`}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />
                    <div className>
                      <h6 className="text-white mb-0">{Review.cos1}</h6>
                      <em className="text-white">{Review.role1}</em>
                    </div>
                  </div>
                  <div className="reviews-block-info">
                    <p>{Review.testi1}</p>
                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        {Review.rate1}{" "}
                        <small className="ms-2">{Review.rating}</small>
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
                      src={`data:image/jpeg;base64,${Review.foto2}`}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />
                    <div className>
                      <h6 className="text-white mb-0">{Review.cos2}</h6>
                      <em className="text-white">{Review.role1}</em>
                    </div>
                  </div>
                  <div className="reviews-block-info">
                    <p>{Review.testi2}</p>
                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        {Review.rate2}{" "}
                        <small className="ms-2">{Review.rating}</small>
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
                      src={`data:image/jpeg;base64,${Review.foto3}`}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />
                    <div className>
                      <h6 className="text-white mb-0">{Review.cos3}</h6>
                      <em className="text-white">{Review.role1}</em>
                    </div>
                  </div>
                  <div className="reviews-block-info">
                    <p>{Review.testi3}</p>
                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        {Review.rate1}
                        <small className="ms-2">{Review.rating}</small>
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
  );
};

export default Review;
