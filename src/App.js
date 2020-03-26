import React from "react";
import { Route, Switch } from "react-router";

import HistoryInfo from './pages/HistoryInfo';
import Launches from "./pages/Launches";
import History from "./pages/History";
import Loading from './components/Loading';
import NavBar from "./components/NavBar";
import Modal from './components/Modal';

function App() {
	return (
		<div >
			{/* <Button /> */}
			<NavBar />
			<Loading />
			<Switch>
				<Route path="/Launches" exact component={Launches} />
				<Route path="/Launches/:id" exact component={Modal} />
				<Route path="/History" exact component={History} />
				<Route path="/History/:id" exact component={HistoryInfo} />
			</Switch>
		</div>
	);
}

export default App;
