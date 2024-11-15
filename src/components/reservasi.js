import Booking from "./Booking/Booking";
import Footer from "./Footer/Footer";
import NavbarReservation from "./NavbarReservation/NavbarReservation";

const Reservation = () => {
  return (
    <div>
      <main>
        {/*componen navbar:ini nnti import yg navbar dari index jo dpe komponen spya so nd mo bekg komponen yg baru ini*/}
        <NavbarReservation />
        {/*componen booking*/}
        <Booking />
        {/*componen footer:ini leh sma dg navbar, nnti ambe yg di index*/}
        <Footer />
      </main>
      {/* JAVASCRIPT FILES */}
    </div>
  );
};

export default Reservation;
