import React from "react";

export default function DetailsDescription({ data }) {
  return (
    <main>
      <h2 className="fw-bold fs-1">{data.name}</h2>
      <h5 className="text-gray">
        {data.city}, {data.country}{" "}
      </h5>
      <p className="text-gray my-4">{data.description}</p>
      {/* {ReactHtmlParser(data.description)} */}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div key={`feature-${index}`} className="col-3" style={{ marginBottom: 20 }}>
              <img src={feature.imageUrl} alt={feature.name} className="d-block" />
              <span className="fw-bolder me-1">{feature.qty} </span>
              <span className="text-gray"> {feature.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
