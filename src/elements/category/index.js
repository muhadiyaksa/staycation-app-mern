import React from "react";
import "./index.scss";
import propTypes from "prop-types";
import Button from "../button";

export default function Category(props) {
  const className = [];
  if (props.isPopular === true) className.push("flex");
  if (props.isPopular === false) className.push("none");

  return (
    <div className="gridCategory">
      <div class="image">
        <img src={props.src} alt="" />
        <div className={`info ${className.join(" ")}`}>
          <p className="m-0 p-0">
            <span class="fw-bold">Popular</span> Choice
          </p>
        </div>
      </div>
      <div class="content">
        <Button type="link" href={props.href} className="btn p-0">
          <h5>{props.name}</h5>
        </Button>
        <p>{props.city}</p>
      </div>
    </div>
  );
}

Category.propTypes = {
  isPopular: propTypes.bool,
  isNotPopular: propTypes.bool,
};
