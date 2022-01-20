import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>); //Pembuatan variabel dengan destructuring // dan button akan diberi props isDisabled

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
  // jadi test ini buat ngecek button kalo dikasih props isDisabled apakah berfungsi apa engga
  // expect adalah ekspetasi kita terhadap container nantinya mau diuji kek begimana
  // jadi kita berekspetasi bahwa nanti sicontainer = button
  // berekspetasi sicontainer akan punya span dengan className disabled
  // dan letak span itu ada di document , intinya kek document.querySelector
  // kalo misal si button bener gabisa di klik dengan adanya className disabled , maka test akan berhasil
  // intinya ini test buat button supaya gabisa di klik kalo dikasih className disabled
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  // jadi disini kita berekspetasi apakah nanti didalam span itu ada kata loading atau tidak
  // fungsi yang digunakan adalah fungsi regex
  // dengan i (insensitive) dia gapeduli kalo misal Loading loAding atau LoAdiNg , yang penting kata loading

  expect(container.querySelector("span")).toBeInTheDocument();
  // ini sama ajah jadi kita berekspetasi bahwa container nya berisi span
});

test("Should render a tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
