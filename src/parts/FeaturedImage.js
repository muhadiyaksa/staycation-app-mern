import React from "react";
import Fade from "react-reveal/Fade";
import Detail1 from "../assets/image/detail1.jpg";
import Detail2 from "../assets/image/detail2.jpg";
import Detail3 from "../assets/image/detail3.jpg";

export default function FeaturedImage() {
  return (
    <section className="container">
      <div className="container-grid sm">
        <div className="item column-7 row-2">
          <Fade bottom>
            <img src={Detail1} alt="" />
          </Fade>
        </div>
        <div className="item column-5 row-1">
          <Fade bottom delay={200}>
            <img src={Detail2} alt="" />
          </Fade>
        </div>
        <div className="item column-5 row-1">
          <Fade bottom delay={400}>
            <img src={Detail3} alt="" />
          </Fade>
        </div>
      </div>
    </section>
  );
}
