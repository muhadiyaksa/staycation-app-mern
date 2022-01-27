import React from "react";
import GridImage from "../elements/gridImage";

import MostPicked1 from "../assets/image/mostpicked1.jpg";
import MostPicked2 from "../assets/image/mostpicked2.jpg";
import MostPicked3 from "../assets/image/mostpicked3.jpg";
import MostPicked4 from "../assets/image/mostpicked4.jpg";
import MostPicked5 from "../assets/image/mostpicked5.jpg";

import numberFormat from "../utils/numberFormat";
export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-4">Most Picked</h4>
      <div className="container-grid">
        <div className="item column-4 row-2">
          <div className="card ">
            <GridImage
              src={MostPicked1}
              location="/properties/188"
              classImg="img-cover"
              isDiscount
              nameHotel="Saung Teduh"
              cityHotel="Anyer Banten"
              countryHotel="Indonesia"
              discount="20"
              priceDiscount={numberFormat("438000")}
              priceOrigin={numberFormat("540000")}
            />
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">
            <GridImage
              src={MostPicked2}
              location="/properties/188"
              classImg="img-cover"
              isDiscount
              nameHotel="Hotel Roro"
              cityHotel="Bali"
              countryHotel="Indonesia"
              discount="10"
              priceDiscount={numberFormat("360000")}
              priceOrigin={numberFormat("400000")}
            />
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">
            <GridImage
              src={MostPicked3}
              location="/properties/188"
              classImg="img-cover"
              isDiscount
              nameHotel="Hats Hotel"
              cityHotel="Pare-pare Sulawesi"
              countryHotel="Indonesia"
              discount="15"
              priceDiscount={numberFormat("212500")}
              priceOrigin={numberFormat("250000")}
            />
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">
            <GridImage
              src={MostPicked4}
              location="/properties/188"
              classImg="img-cover"
              isDiscount
              nameHotel="Luxury Aditama"
              cityHotel="Jakarta Pusat"
              countryHotel="Indonesia"
              discount="12"
              priceDiscount={numberFormat("440000")}
              priceOrigin={numberFormat("500000")}
            />
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">
            <GridImage
              src={MostPicked5}
              location="/properties/188"
              classImg="img-cover"
              isDiscount
              nameHotel="White Beach Hotel"
              cityHotel="Parangtritis Yogyakarta"
              countryHotel="Indonesia"
              discount="8"
              priceDiscount={numberFormat("368000")}
              priceOrigin={numberFormat("400000")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
