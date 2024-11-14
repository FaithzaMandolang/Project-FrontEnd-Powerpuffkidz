const Review = () => {
  return (
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
                      alt=""
                    />
                    <div className>
                      <h6 className="text-white mb-0">Grace</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>
                  <div className="reviews-block-info">
                    <p>
                      The atmosphere at Aksara Cafe is simply unbeatable! The
                      coffee is always rich and flavorful, and the staff makes
                      you feel right at home. It’s my favorite spot to relax and
                      catch up with friends. Highly recommend
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
                      alt=""
                    />
                    <div className>
                      <h6 className="text-white mb-0">Fajrikun</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>
                  <div className="reviews-block-info">
                    <p>Mantappp BosssQuuuu</p>
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
                      alt=""
                    />
                    <div className>
                      <h6 className="text-white mb-0">Faithza</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>
                  <div className="reviews-block-info">
                    <p>
                      This cafe never disappoints! The ambiance is perfect for
                      working or just unwinding with a book. The attention to
                      detail in every cup of coffee is amazing, and the staff’s
                      warmth makes every visit special.
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
  );
};

export default Review;
