import React from "react";
import { Route, Switch } from "react-router";

import History from "./conponents/pages/History";
import Launches from "./conponents/pages/Launches";
import NavBar from "./conponents/NavBar";
// import Button from './conponents/Button'
// import './App.css';

function App() {
	return (
		<div className="App">
			{/* <Button /> */}
			<NavBar />
			<Switch>
				<Route path="/Launches" exact component={Launches} />
				<Route path="/History" exact component={History} />
			</Switch>
		</div>
	);
}

export default App;
