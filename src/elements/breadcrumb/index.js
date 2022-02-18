import React from "react";
import propTypes from "prop-types";
import Button from "../button";
import "./index.scss";

export default function BreadCrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {props.data.map((item, index) => {
          return (
            <li key={`BreadCrumb-${index}`} className={`breadcrumb-item ${index === props.data.length - 1 ? " active" : ""}`}>
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

BreadCrumb.propTypes = {
  data: propTypes.array,
  //   className: propTypes.string,
};
