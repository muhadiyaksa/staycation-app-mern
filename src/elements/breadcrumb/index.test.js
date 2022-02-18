import React from "react";
import { render } from "@testing-library/react";
import Breadcrum from "./index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const setup = () => {
  const breadCrumbList = [
    {
      pageTitle: "home",
      pageHref: "",
    },
    {
      pageTitle: "House Details",
      pageHref: "",
    },
  ];

  const { container } = render(
    <Router>
      <Breadcrum data={breadCrumbList} />
    </Router>
  );

  const breadcrumb = container.querySelector(".breadcrumb");

  return {
    breadcrumb,
  };
};

test("Should have <ol> with Classname .breadcrumb and have text home & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toBeInTheDocument("Home");
  expect(breadcrumb).toBeInTheDocument("House Details");
});
