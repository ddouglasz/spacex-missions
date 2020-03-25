// import React from 'react'
// import Button from '../Button'
import React from "react";
import { connect } from "react-redux";
import { getLaunches } from "../../actions/launchesActions";
import Modal from "../Modal";
import Card from "../Card";

class Launches extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			show: false,
		};
	}

	showModal = e => {
		this.setState({
			show: !this.state.show,
		});
	};

	componentDidMount() {
		this.props.getLaunches();
	}

	render() {
		const launches = this.props.launches;
		const allLaunches = launches || [];
		const displayAllLaunches = allLaunches.map(launch => (
			<Card
				launchName={launch.mission_name}
				page="launch"
				key={launch.id}
				showModal={this.showModal}
			/>
		));

		return launches ? (
			<div>
				{launches.error && <h2>{launches.error}</h2>}
				<Modal onClose={this.showModal} show={this.state.show}>
					Message in Modal
				</Modal>
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
