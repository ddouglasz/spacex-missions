import React from "react";
import { render } from "@testing-library/react";
import Modal from "../Modal.jsx";

const props = {
  show: true
}
test("renders modal", () => {
	const { getAllByTestId } = render(
			<Modal {...props}/>
	);

	expect(getAllByTestId("modal-container").length).toEqual(1);
});

test("renders modal send button", () => {

	const { getAllByTestId } = render(
			<Modal {...props}/>
	);

	expect(getAllByTestId("modal-send-button").length).toEqual(1);
});

test("renders close modal button", () => {

	const { getAllByTestId } = render(
			<Modal {...props}/>
	);

	expect(getAllByTestId("close-modal-button").length).toEqual(1);
});


