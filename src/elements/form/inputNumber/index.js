import React, { useState } from "react";
import "./index.scss";
import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value); //karna tadi di default.props itu prefix="" dan suffix="", maka digunakan untuk menimpa nilai tersebut
    if (prefix) value = value.replace(prefix); //apabila prefixnya ada maka valuenya akan bernilai prefix
    if (suffix) value = value.replace(suffix); //apabila suffixnya ada maka valuenya akan bernilai suffix

    const patternTest = new RegExp("[0-9]*");
    const isNumeric = patternTest.test(value); //apakah value terdiri dari angka 0-9

    if (isNumeric && +value <= max && +value >= min) {
      console.log("benar");
      //props ini dapat diganti tergantung tombol mana yang diklik (minus atau plus)
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`);
    }
  };

  const minus = () => {
    //apabila minus ditekan maka minus akan memanggil fungsi onChange dimana parameternya akan mengganti props.onChange difunction onChange

    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    // ini sama function onChange propsnya akan berubah sesuai dengan parameter yang diisi dibawah ini

    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };
  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input min={min} max={max} name={name} pattern="[0-9]*" className="form-control" placeholder={placeholder ? placeholder : "0"} value={String(InputValue)} onChange={onChange} />
        <div className="input-group-append ">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  // digunakan apabila pada saat memanggil komponen, min max tidak didefinisi
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]), //dibolehkan salah satu baik string maupun number
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
