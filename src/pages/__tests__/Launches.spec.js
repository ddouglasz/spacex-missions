import React from "react";
import { render } from "@testing-library/react";
import Launches from "../Launches.jsx";

test("renders search container", () => {
	const { getAllByTestId } = render(
			<Launches />
	);

	expect(getAllByTestId("search-container").length).toEqual(2);
});

