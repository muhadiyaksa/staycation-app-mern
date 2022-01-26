import React from "react";
import GridImage from "../elements/gridImage";
import MostPicked1 from "../assets/image/mostpicked1.jpg";
export default function MostPicked(props) {
  return (
    <section className="container">
      <h4 className="mb-4">Most Picked</h4>
      <div className="container-grid">
        <div className="item column-4 row-2">
          <div className="card ">
            <GridImage src={MostPicked1} classImg="img-fluid" />
          </div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card 2</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card 3</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card 4</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">
            <GridImage />
          </div>
        </div>
      </div>
    </section>
  );
}
