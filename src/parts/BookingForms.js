import React, { Component } from "react";

import propTypes from "prop-types";
import Button from "../elements/button";
import InputNumber from "../elements/form/inputNumber";
import InputDate from "../elements/form/inputDate";

import numberFormat from "../utils/numberFormat";

export default class BookingForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(startDate.setDate(startDate.getDate() + +data.duration - 1));

      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }
  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;
    console.log(itemDetails);
    return (
      <div className="card bordered" style={{ padding: "60px 70px" }}>
        <h4>Start Booking</h4>
        <h5 className="py-3">
          Rp. {numberFormat(itemDetails.price)}
          <span className="text-gray fw-light ">/ Nights</span>
        </h5>

        <label htmlFor="duration">How Long You Will Stay?</label>
        <InputNumber max={30} suffix={" night"} isSuffixPlural onChange={this.updateData} name="duration" value={data.duration} />
      </div>
    );
  }
}

BookingForms.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
