import React from "react";
import Button from "../elements/button";
import IconText from "./icon-text";
export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div class="col">
            <IconText />
            <p className="brand-tagline">We provide a variety of your vacation spots</p>
          </div>
          <div className="col-2">
            <h6>For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Booking A Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payment">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6>Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy and Police
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Term And Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h6>Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:muhadiyaksa@gmail.com">
                  muhadiyaksa@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622111122234">
                  021 - 1112 -2234
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation On Jakarta</span>
              </li>
            </ul>
          </div>
          <p className="text-center mt-5">Copyright 2022 - All right reserved - Staycation </p>
        </div>
      </div>
    </section>
  );
}
