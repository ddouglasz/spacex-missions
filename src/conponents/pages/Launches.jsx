// import React from 'react'
// import Button from '../Button'
import React from "react";
import { connect } from "react-redux";
import { getLaunches } from "../../actions/launchesActions";
import Card from "../Card";

class Launches extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: false };
	}

	componentDidMount() {
		this.props.getLaunches();
	}

	render() {
		const launches = this.props.launches;
		const allLaunches = launches || [];
		const displayAllLaunches = allLaunches.map(launch => (
			<Card launchName={launch.mission_name} />
		));

		return launches ? (
			<div>
				{launches.error && <h2>{launches.error}</h2>}
				{launches && displayAllLaunches}
			</div>
		) : null;
	}
}

const mapStateToProps = state => ({
	launches: state.launches,
});

Launches = connect(mapStateToProps, { getLaunches }, null)(Launches);

export default Launches;
