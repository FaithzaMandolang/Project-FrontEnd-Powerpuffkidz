const Menu = () => {
  return (
    <section className="menu-section section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Delicious Menu</em>
                <h4 className="text-white">{Menu.Breakfast.nama}</h4>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Menu.Breakfast.Pancake.nama}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Breakfast.Pancake.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Breakfast.Pancake.ket}</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>{Menu.Breakfast.ToastedWaffles.nama}</h6>
                  <span className="underline" />
                  <strong className="text-white ms-auto">
                    <del>$16.50</del>
                  </strong>
                  <strong className="ms-2">
                    {Menu.Breakfast.ToastedWaffles.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Breakfast.ToastedWaffles.ket}</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>
                    {Menu.Breakfast.FriedChips.nama}
                    <span className="badge ms-3">Recommend</span>
                  </h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Breakfast.FriedChips.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Breakfast.FriedChips.ket}</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>{Menu.Breakfast.Cereal.nama}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Breakfast.Cereal.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Breakfast.Cereal.ket}</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Menu.Breakfast.BananaCake.nama}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Breakfast.BananaCake.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Breakfast.BananaCake.ket}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Favourite Menu</em>
                <h4 className="text-white">{Menu.Coffee.nama}</h4>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Menu.Coffee.Latte.nama}</h6>
                  <span className="underline" />
                  <strong className="text-white ms-auto">
                    <del>$12.50</del>
                  </strong>
                  <strong className="ms-2">{Menu.Coffee.Latte.price}</strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Coffee.Latte.ket}</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>
                    {Menu.Coffee.WhiteCoffee.nama}
                    <span className="badge ms-3">Recommend</span>
                  </h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Coffee.WhiteCoffee.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Coffee.WhiteCoffee.ket}</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Menu.Coffee.ChocolateMilk.nama}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Coffee.ChocolateMilk.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Coffee.ChocolateMilk.ket}</small>
                </div>
              </div>
              <div className="menu-block my-4">
                <div className="d-flex">
                  <h6>{Menu.Coffee.Greentea.nama}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Coffee.Greentea.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Coffee.Greentea.ket}</small>
                </div>
              </div>
              <div className="menu-block">
                <div className="d-flex">
                  <h6>{Menu.Coffee.DarkChocolate.nama}</h6>
                  <span className="underline" />
                  <strong className="ms-auto">
                    {Menu.Coffee.DarkChocolate.price}
                  </strong>
                </div>
                <div className="border-top mt-2 pt-2">
                  <small>{Menu.Coffee.DarkChocolate.ket}</small>
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
