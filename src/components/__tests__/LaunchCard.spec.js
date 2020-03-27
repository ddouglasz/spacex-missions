import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import LaunchCard from '../LaunchCard';



test('renders launch card element', () => {
  const { getAllByTestId } = render(<BrowserRouter><LaunchCard /></BrowserRouter>);
  
  expect(getAllByTestId('launch-card-name').length).toEqual(1);
  expect(getAllByTestId('payload-nationality').length).toEqual(1);
  expect(getAllByTestId('payload-manufacturer').length).toEqual(1);
  expect(getAllByTestId('payload-type').length).toEqual(1);
});

test('renders launch card modal element', () => {
  const { getAllByTestId } = render(<BrowserRouter><LaunchCard /></BrowserRouter>);
  
  expect(getAllByTestId('launch-card-modal-button').length).toEqual(1);
});

test("modal button should fire action", () => {

	const { getByText } = render(
			<LaunchCard id={3} showModal={jest.fn()} />
	);

  
  fireEvent.click(getByText("More Info"));
});
