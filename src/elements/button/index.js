import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];

  // Jadi misal nanti button ditambah atribut isPrimary di Pages , maka ia akan memiliki className btn-primary
  // Contoh :
  // <Button isPrimary>Click Here</button>
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          // Dibawah ini adalah react.fragment
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading ...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a href={props.href} className={className.join(" ")} style={props.style}>
          {props.children}
        </a> //secara default semua komponen mempunyai props.children yang isinya sebagai string dalam tag
      );
    } else {
      return (
        <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button className={className.join(" ")} style={props.style} onClick={onClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]), //button hanya menerima format button / link saja
  onClick: propTypes.func, //button hanya menerima function untuk atribut onClick
  href: propTypes.string, //button hanya menerima string untuk target link href
  target: propTypes.string, //button hanya menerima string untuk target link
  className: propTypes.string, //button hanya menerima string untuk classnya
  isDisabled: propTypes.bool, //button hanya menerima true atau false untuk apakah dia disable atau engga
  isLoading: propTypes.bool, //button hanya menerima true atau false untuk proses loading kecil apabila button ditekan
  isSmall: propTypes.bool, //button hanya menerima true atau false untuk proses milih ini button kecil atau engga
  isLarge: propTypes.bool, //button hanya menerima true atau false untuk proses milih ini button besar atau engga
  isBlock: propTypes.bool, //button hanya menerima true atau false untuk proses milih ini button block atau engga
  isExternal: propTypes.bool, //button hanya menerima true atau false untuk proses milih ini mengarah ke link external atau engga
  isPrimary: propTypes.bool,
  hasShadow: propTypes.bool, //button hanya menerima true atau false untuk proses milih ini button punya shadow atau engga
};
