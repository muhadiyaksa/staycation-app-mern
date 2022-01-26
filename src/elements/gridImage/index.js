import React from "react";
import "./index.scss";
import propTypes from "prop-types";

export default function GridImage(props) {
  const { src, classImg } = props;
  return (
    <div className="gridImage">
      <img src={src} alt="Mostpicked Image" />
      <div className="infoImage">
        <p>Discount Up to 10%</p>
      </div>
      <div className="content">
        <h3>Hotel Roro</h3>
        <p>Bali, Indonesia</p>
      </div>
    </div>
  );
}

GridImage.propTypes = {
  isDiscount: propTypes.bool,
  isPopular: propTypes.bool,
};
