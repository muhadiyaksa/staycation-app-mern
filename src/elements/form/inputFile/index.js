import React, { useRef } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function File(props) {
  const { value, placeholder, name, accept, prepend, append, outerClassName, inputClassName } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input type="file" accept={accept} name={name} ref={refInputFile} className="d-none" value={value} onChange={props.onChange} />
        <input onClick={() => refInputFile.current.click()} defaultValue={value} placeholder={placeholder} className={["form-control btn", inputClassName].join(" ")} />
        {append && (
          <div className="input-group-append bg-gray">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse A File",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
