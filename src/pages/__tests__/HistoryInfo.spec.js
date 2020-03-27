import React from "react";
import { Provider } from "react-redux";
import { render  } from "@testing-library/react";

import configureMockStore from 'redux-mock-store'

import HistoryInfo from "../HistoryInfo.jsx";
const mockStore = configureMockStore({})


test("renders navigation elements", () => {
  
  const getSingleHistory = {
    
  }
  const store = mockStore({getSingleHistory});
  const props = {
    match: {
      params: ''
    },
  }
	const { getAllByTestId } = render(
		<Provider store={store}>
			<HistoryInfo {...props}/>
		 </Provider>,
	);

	expect(getAllByTestId("history-info-elements").length).toEqual(2);
});
