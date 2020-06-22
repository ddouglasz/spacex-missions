import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { render, fireEvent } from '@testing-library/react';

import HistoryCard from '../HistoryCard';



test('renders historyCard description', () => {
  const { getAllByTestId } = render(<BrowserRouter><HistoryCard /></BrowserRouter>);
  
  expect(getAllByTestId('history-card-description').length).toEqual(1);
});

test('renders historyCard event date', () => {
  const { getAllByTestId } = render(<BrowserRouter><HistoryCard /></BrowserRouter>);
  
  expect(getAllByTestId('history-card-event-date').length).toEqual(1);
});

test('renders historyCard link element', () => {
  const { getAllByTestId } = render(<BrowserRouter><HistoryCard /></BrowserRouter>);
  
  expect(getAllByTestId('history-card-link-element').length).toEqual(1);
});

test("renders navigation elements with their appropiate names and history Id", () => {
	const history = createMemoryHistory();

	const { getByText } = render(
		<Router history={history}>
			<HistoryCard history_id={3}/>
		</Router>,
	);

	fireEvent.click(getByText("More Info"));
	
	expect(history.location.pathname).toEqual("/History/3");
});