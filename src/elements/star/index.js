import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const desimals = (Number(value) % 1).toFixed(1);
  const star = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - desimals; i++) {
    leftPos = leftPos + width;
    star.push(<div className="star" key={`star=${i}`} style={{ left: i * width, height: height, width: width, marginRight: spacing }}></div>);
  }
  if (desimals > 0 && value <= 5) {
    star.push(<div className="star" key={`starWithDecimals`} style={{ left: leftPos, height: height, width: width * desimals - spacing }}></div>);
  }

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(<div className="star placeholder" key={`starplaceholder=${i}`} style={{ left: i * width, height: height, width: width, marginRight: spacing }}></div>);
  }

  return (
    <>
      <div className={["stars", { className }].join(" ")} style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
