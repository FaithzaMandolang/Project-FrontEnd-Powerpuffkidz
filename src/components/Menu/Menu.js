import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Menu = () => {
  const [Breakfast, setBreakfast] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const BreakfastRef = ref(db, "Breakfast/");
    onValue(
      BreakfastRef,
      (snapshot) => {
        const data = snapshot.val();
        setBreakfast(data);
      },
      []
    );
  });

  const [Coffee, setCoffee] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const CoffeeRef = ref(db, "Coffee/");
    onValue(
      CoffeeRef,
      (snapshot) => {
        const data = snapshot.val();
        setCoffee(data);
      },
      []
    );
  });
  return (
    <section className="menu-section section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Delicious Menu</em>
                <h4 className="text-white">Breakfast</h4>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Breakfast.nama1}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Breakfast.price1}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Fresh brewed coffee and steamed milk</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>{Breakfast.nama2}</h6>
                  <span className="underline" />
                  <strong className="text-white ms-auto">
                    <del>$16.50</del>
                  </strong>
                  <strong className="ms-2">{Breakfast.price2}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Brewed coffee and steamed milk</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>
                    {Breakfast.nama3}
                    <span className="badge ms-3">Recommend</span>
                  </h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Breakfast.price3}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Rich Milk and Foam</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>{Breakfast.nama4}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Breakfast.price4}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Fresh brewed coffee and steamed milk</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Breakfast.nama5}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Breakfast.price5}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Rich Milk and Foam</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Favourite Menu</em>
                <h4 className="text-white">Coffee</h4>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Coffee.kopi1}</h6>
                  <span className="underline" />
                  <strong className="text-white ms-auto">
                    <del>$12.50</del>
                  </strong>
                  <strong className="ms-2">{Coffee.harga1}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Fresh brewed coffee and steamed milk</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>
                    {Coffee.kopi2}
                    <span className="badge ms-3">Recommend</span>
                  </h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Coffee.harga2}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Brewed coffee and steamed milk</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Coffee.kopi3}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Coffee.harga3}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Rich Milk and Foam</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>{Coffee.kopi4}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Coffee.harga4}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Fresh brewed coffee and steamed milk</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Coffee.kopi5}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">{Coffee.harga5}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>Rich Milk and Foam</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
