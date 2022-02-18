import React, { Component } from "react";
// import InputNumber from "../elements/form/inputNumber";
// import InputDate from "../elements/form/inputDate";
import Breadcrum from "../elements/breadcrumb";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
    const breadCrumbList = [
      {
        pageTitle: "home",
        pageHref: "",
      },
      {
        pageTitle: "House Details",
        pageHref: "",
      },
    ];
    return (
      <div className="container">
        <div className="row py-4">
          <div className="col-4">
            <Breadcrum data={breadCrumbList} className={["breadcrumb"]} />
            {/* <InputDate max={30} onChange={this.handleChange} name="value" value={this.state.value} /> */}
            {/* <InputNumber max={30} name="value" onChange={this.handleChange} value={this.state.value} suffix=" night" isSuffixPlural /> */}
          </div>
        </div>
      </div>
    );
  }
}
