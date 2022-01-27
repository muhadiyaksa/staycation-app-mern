import React from "react";
import "./index.scss";
import propTypes from "prop-types";
import Button from "../button";

export default function GridImage(props) {
  const { src, discount, price, nameHotel, cityHotel, countryHotel, location, priceDiscount, priceOrigin } = props;
  const className = [];

  const checkDiscount = (dis, city, pric) => {
    if (props.isDiscount) {
      return <p>Discount Up to {dis} %</p>;
    } else if (props.isPopular) {
      return <p>Popular in {city}</p>;
    } else {
      return <p>Rp. {pric} / Night</p>;
    }
  };

  if (props.isPopular || props.isDiscount) className.push("flex");
  if (props.isNotPopular || props.isNotDiscount) className.push("none");

  return (
    <div className="gridImage">
      <div className="priceHotel">
        <h3>Rp. {priceDiscount}</h3>
        <p className="text-decoration-line-through">Rp. {priceOrigin}</p>
      </div>
      <img src={src} alt="Mostpicked" className={props.classImg} />
      <div className={`infoImage ${className.join(" ")}`}>{checkDiscount(discount, cityHotel, price)}</div>
      <div className="kotak"></div>
      <div className="content">
        <Button type="link" href={location} className="btn p-0 text-white">
          <h2>{nameHotel}</h2>
        </Button>
        <p>
          {cityHotel}, {countryHotel}
        </p>
      </div>
    </div>
  );
}

GridImage.propTypes = {
  isDiscount: propTypes.bool,
  isNotDiscount: propTypes.bool,
  isPopular: propTypes.bool,
  isNotPopular: propTypes.bool,
};
