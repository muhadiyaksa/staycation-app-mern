import React from "react";
import Fade from "react-reveal/Fade";

import CompleteImage from "../../assets/image/complete.svg";
export default function Complete() {
  return (
    <Fade>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-4">
            <img src={CompleteImage} alt="Complete Image" className="img-fluid" alt="completed Checkout" />
            <p className="text-gray">We Will inform you via email later once the transaction has been accepted</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
