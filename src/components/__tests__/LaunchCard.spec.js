import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { render, fireEvent } from '@testing-library/react';

import LaunchCard from '../LaunchCard';



test('renders launch name element', () => {
  const { getAllByTestId } = render(<BrowserRouter><LaunchCard /></BrowserRouter>);
  
  expect(getAllByTestId('launch-card-name').length).toEqual(1);
});

test('renders launch name element', () => {
  const { getAllByTestId } = render(<BrowserRouter><LaunchCard /></BrowserRouter>);
  
  expect(getAllByTestId('launch-card-modal-button').length).toEqual(1);
});

test("ronclick button should open modal", () => {
	const history = createMemoryHistory();

	const { getByText } = render(
		<Router history={history}>
			<LaunchCard id={3} showModal={jest.fn()} />
		</Router>,
	);

  
fireEvent.click(getByText("More Info"));

});
