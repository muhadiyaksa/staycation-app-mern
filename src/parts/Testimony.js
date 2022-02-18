import React from "react";
import Star from "../elements/star";
import TestimonyFrame from "../assets/image/ulasan/ulasan1garis.png";
import Button from "../elements/button";
import Fade from "react-reveal/Fade";

export default function Testimony({ data }) {
  let windowScroll;

  document.addEventListener("scroll", function () {
    windowScroll = window.scrollY;
  });

  const mouseHoverImg = (e) => {
    const imgHero = document.querySelector(".testimonial .testimonial-hero img:nth-child(1)");
    const posisiX = e.pageX;
    const posisiY = e.pageY;
    const posisiValue = imgHero.getBoundingClientRect();

    const posisiRL = (posisiValue.right - posisiValue.left) / 2;
    const posisiCenterX = posisiRL + posisiValue.left;
    const posisiTB = (posisiValue.bottom - posisiValue.top) / 2;
    const posisiCenterY = posisiTB + posisiValue.top;

    imgHero.style.transform = `rotateX(${Math.floor((posisiY - (windowScroll + posisiCenterY)) / 30)}deg) rotateY(${Math.floor((posisiX - posisiCenterX) / 20)}deg)`;
  };

  const mouseOverHoverImg = (e) => {
    const imgHero = document.querySelector(".testimonial .testimonial-hero img:nth-child(1)");

    imgHero.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };
  return (
    <section className="container">
      <div className="row testimonial">
        <Fade bottom>
          <div className="col-md-5">
            <div className="testimonial-hero">
              <img src={data.imageUrl} alt="" onMouseMove={mouseHoverImg} onMouseLeave={mouseOverHoverImg} />
              <img src={TestimonyFrame} alt="" />
            </div>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="col-md-7 content">
            <h5>{data.name}</h5>
            <Star value={4.6} width={30} height={30} spacing={1}></Star>
            <h2 className="text-capitalize my-3">{data.content}</h2>
            <p>
              {data.familyName} from{" "}
              <strong>
                {data.hotel}, {data.cityHotel} {data.countryHotel}
              </strong>
            </p>
            <Button type="link" className="btn px-5 py-3" isPrimary hasShadow href="/ulasan">
              Read Their Story
            </Button>
          </div>
        </Fade>
      </div>
    </section>
    // <div>
    // </div>
  );
}
