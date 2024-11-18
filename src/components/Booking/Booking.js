import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Booking = () => {
  const [Booking, setBooking] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const BookingRef = ref(db, "Booking/");
    onValue(
      BookingRef,
      (snapshot) => {
        const data = snapshot.val();
        setBooking(data);
      },
      []
    );
  });
  return (
    <section className="booking-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <div className="booking-form-wrap">
              <div className="row">
                <div className="col-lg-7 col-12 p-0">
                  <form
                    className="custom-form booking-form"
                    action="#"
                    method="post"
                    role="form"
                  >
                    <div className="text-center mb-4 pb-lg-2">
                      <em className="text-white">{Booking.opening1}</em>
                      <h2 className="text-white">{Booking.judul}</h2>
                    </div>
                    <div className="booking-form-body">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <input
                            type="text"
                            name="booking-form-name"
                            id="booking-form-name"
                            className="form-control"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-12">
                          <input
                            type="tel"
                            className="form-control"
                            name="booking-form-phone"
                            placeholder="Phone: 085 456 7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-12">
                          <input
                            className="form-control"
                            type="time"
                            name="booking-form-time"
                            defaultValue="18:30"
                          />
                        </div>
                        <div className="col-lg-6 col-12">
                          <input
                            type="date"
                            name="booking-form-date"
                            id="booking-form-date"
                            className="form-control"
                            placeholder="Date"
                            required
                          />
                        </div>
                        <div className="col-lg-12 col-12">
                          <input
                            type="number"
                            name="booking-form-number"
                            id="booking-form-number"
                            className="form-control"
                            placeholder="Number of People"
                            required
                          />
                          <textarea
                            name="booking-form-message"
                            rows={3}
                            className="form-control"
                            id="booking-form-message"
                            placeholder="Comment (Optional)"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-lg-4 col-md-10 col-8 mx-auto mt-2">
                          <button type="submit" className="form-control">
                            {Booking.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-5 col-12 p-0">
                  <div className="booking-form-image-wrap">
                    <img
                      src="images/barman-with-fruits.jpg"
                      className="booking-form-image img-fluid"
                      alt=""
                    />
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

export default Booking;
