import React from "react";
import { render } from "@testing-library/react";



test("renders history page scroll element", () => {
	const { getAllByTestId } = render(
			<History />
	);

	expect(getAllByTestId("history-scroll").length).toEqual(1);
});

