import React from "react";
import BreadCrumb from "../elements/breadcrumb";

export default function PageDetailBreadcrumb({ breadcrumb }) {
  return (
    <section className="mb-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <BreadCrumb data={breadcrumb} />
          </div>
        </div>
      </div>
    </section>
  );
}
