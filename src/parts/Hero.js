import React from "react";

import ImgHero from "../assets/image/img-hero.jpg";
import ImgHeroLine from "../assets/image/img-hero-line.jpg";
import IconCamera from "../assets/image/icons/icon-camera.svg";
import IconKoper from "../assets/image/icons/icon-koper.svg";
import IconLocation from "../assets/image/icons/icon-location.svg";
import numberFormat from "../utils/numberFormat";
import Button from "../elements/button";

// import NumberFormat from "react-number-format";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  const mouseHoverImg = (e) => {
    const imgHero = document.querySelector(".hero .image-hero img:nth-child(1)");
    const posisiX = e.pageX;
    const posisiY = e.pageY;
    const posisiValue = imgHero.getBoundingClientRect();

    const posisiRL = (posisiValue.right - posisiValue.left) / 2;
    const posisiCenterX = posisiRL + posisiValue.left;
    const posisiTB = (posisiValue.bottom - posisiValue.top) / 2;
    const posisiCenterY = posisiTB + posisiValue.top;

    imgHero.style.transform = `rotateX(${Math.floor((posisiY - posisiCenterY) / 40)}deg) rotateY(${Math.floor((posisiX - posisiCenterX) / 40)}deg)`;
  };

  const mouseOverHoverImg = (e) => {
    const imgHero = document.querySelector(".hero .image-hero img:nth-child(1)");
    imgHero.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="container hero">
      <div className="row">
        <div className="col-md">
          <h1 className="mb-3">
            <span className="fw-bold">Forget</span> the <span className="fw-bold">Busy Work.</span>
            <br />
            <span className="fw-bold">Start</span> your next <span className="fw-bold">Vacation</span>
          </h1>
          <p>We provide what you need to enjoy your holiday with family,time to make another memorable moments.</p>
          <Button className="btn px-5 py-3 fw-bold" type="button" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div className="row info">
            <div className="col">
              <img src={IconKoper} alt="travelers" />
              <h6 className="fw-bold mt-3">
                {numberFormat("28008")} <span className=" fw-300">travellers</span>
              </h6>
            </div>
            <div className="col">
              <img src={IconLocation} alt="Cities" />
              <h6 className="fw-bold mt-3">
                {numberFormat("2008")} <span className=" fw-300">Cities</span>
              </h6>
            </div>
            <div className="col">
              <img src={IconCamera} alt="treasures" />
              <h6 className="fw-bold mt-3">
                {/* <NumberFormat value={5699} displayType={"text"} thousandSeparator={true} /> */}
                {numberFormat("5699")}
                <span className="fw-300">treasures</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="image-hero">
            <img src={ImgHero} alt="Hero" className="img-fluid" onMouseMove={mouseHoverImg} onMouseLeave={mouseOverHoverImg} />
            <img src={ImgHeroLine} alt="Hero line" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
