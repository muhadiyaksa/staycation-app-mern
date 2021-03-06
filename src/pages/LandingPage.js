import React, { Component } from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Category from "../parts/Category";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

import landingPage from "../json/LandingPage.json";

export default class LandingPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} />
        <MostPicked refMostPicked={this.refMostPicked} />
        <Category data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
