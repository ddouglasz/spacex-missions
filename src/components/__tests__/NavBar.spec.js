import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";
import NavBar from "../NavBar.jsx";

test("renders navigation elements", () => {
	const { getAllByTestId } = render(
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>,
	);

	expect(getAllByTestId("nav-elements").length).toEqual(2);
});

test("renders navigation elements with their appropiate names", () => {
	const { getByText } = render(
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>,
	);

	expect(getByText("HISTORY")).toBeInTheDocument();
	expect(getByText("LAUNCHES")).toBeInTheDocument();
	expect(getByText("SPACE-X")).toBeInTheDocument();
});

test("renders navigation elements with their appropiate names", () => {
	const history = createMemoryHistory();

	const { getByText } = render(
		<Router history={history}>
			<NavBar />
		</Router>,
	);

	expect(history.location.pathname).toEqual("/");

	fireEvent.click(getByText("HISTORY"));

	expect(history.location.pathname).toEqual("/History");
});
