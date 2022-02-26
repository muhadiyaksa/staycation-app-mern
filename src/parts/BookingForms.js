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
    console.log(this.state);
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
    console.log(data);
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
    return (
      <div className="card bordered" style={{ padding: "60px 70px" }}>
        <h4>Start Booking</h4>
        <h5 className="py-3">
          <span className="text-teal fs-3 me-3">Rp. {numberFormat(itemDetails.price)}</span>
          <span className="text-gray fw-light ">/ Nights</span>
        </h5>

        <label htmlFor="duration">How Long You Will Stay?</label>
        <InputNumber max={30} suffix={" night"} isSuffixPlural onChange={this.updateData} name="duration" value={data.duration} />

        <label htmlFor="date">How Long You Will Stay?</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <span>Payment Amount</span>
        <h3 className="fw-bold ">
          Rp. {numberFormat(+itemDetails.price * data.duration)} <span className="fs-5 fw-light d-block"> for {data.duration} Nights </span>
        </h3>

        <Button className="btn mt-4" hasShadow isPrimary isBlock onClick={startBooking}>
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForms.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
