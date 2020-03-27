import React from "react";
import { Route, Switch, Redirect } from "react-router";

import HistoryInfo from './pages/HistoryInfo';
import Launches from "./pages/Launches";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import Modal from './components/Modal';

function App() {
	return (
		<div >
			<NavBar />
			<Switch>
				<Route path="/" exact render={() => <Redirect to="/history" /> } />
				<Route path="/Launches" exact component={Launches} />
				<Route path="/Launches/:id" exact component={Modal} />
				<Route path="/History" exact component={History} />
				<Route path="/History/:id" exact component={HistoryInfo} />
			</Switch>
		</div>
	);
}

export default App;
