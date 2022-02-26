import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "../parts/Header";
import Button from "../elements/button";
import Stepper from "../elements/Stepper";
import Controller from "../elements/Stepper/Controller";
import MainContent from "../elements/Stepper/MainContent";
import Meta from "../elements/Stepper/Meta";
import Numbering from "../elements/Stepper/Numbering";

import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Complete from "../parts/Checkout/Complete";

import ItemDetails from "../json/ItemsDetail.json";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
      bankNumber: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const checkout = {
      duration: 3,
    };

    const steps = {
      BookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />,
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: <Payment data={data} ItemDetails={ItemDetails} checkout={checkout} onChange={this.onChange} />,
      },
      completed: {
        title: "Yay! completed",
        description: null,
        content: <Complete />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "BookingInformation" && (
                <Controller>
                  {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                    <Fade>
                      <Button className="btn mb-3 w-100" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue Book
                      </Button>
                    </Fade>
                  )}
                  <Button className="btn w-100 border" type="link" isBlock isLight href={`/properties/${ItemDetails._id}`}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && data.bankNumber !== "" && (
                    <Fade>
                      <Button className="btn mb-3 w-100" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button className="btn w-100 border" type="button" isBlock isLight onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button className="btn w-100 border" type="link" isBlock isPrimary hasShadow href="">
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
