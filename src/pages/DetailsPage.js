import React, { Component } from "react";

import Header from "../parts/Header";
import BreadCrumb from "../parts/BreadCrumb";
import FeaturedImage from "../parts/FeaturedImage";
import DetailsDescription from "../parts/DetailsDescription";
import BookingForms from "../parts/BookingForms";
import Category from "../parts/Category";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

import ItemsDetails from "../json/ItemsDetail.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadCrumbList = [
      {
        pageTitle: "Home",
        pageHref: "/",
      },
      {
        pageTitle: "House Details",
        pageHref: "",
      },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <BreadCrumb breadcrumb={breadCrumbList} />
        <FeaturedImage />
        <section className="container">
          <div className="row">
            <div className="col-md-7">
              <DetailsDescription data={ItemsDetails}></DetailsDescription>
            </div>
            <div className="col-md-5 booking">
              <BookingForms itemDetails={ItemsDetails}></BookingForms>
            </div>
          </div>
        </section>
        <Category data={ItemsDetails.categories} />
        <Testimony data={ItemsDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
