import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("Shouldn't be clicked", () => {
  // nge construct function render button jika buttonnya di disabled
  const { container } = render(<Button isDisabled></Button>);

  //   ekspektasikan atau pastikan element span di disabled dan masuk ke dokumen
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
test("Should render a loading or spinner", () => {
  // nge construct function render button jika buttonnya loading
  const { container, getByText } = render(<Button isLoading></Button>);

  //   pastikan text loading (/loading) dengan case insensitive (/i), masuk ke dokumen
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});
test("Should render <a> tag", () => {
  // nge construct function render button jika link nya keluar dari web
  const { container } = render(<Button type="link" isExternal></Button>);

  //   pastikan element a masuk ke dokumen
  expect(container.querySelector("a")).toBeInTheDocument();
});
test("Should render <Link> tag", () => {
  // nge construct function render button jika linknya ke local saja
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  //   pastikan element a masuk ke dokumen
  expect(container.querySelector("a")).toBeInTheDocument();
});
