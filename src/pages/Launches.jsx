// import React from 'react'
// import Button from '../Button'
import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { getLaunches } from "../actions/launchesActions";
import Modal from "../components/Modal";
import LaunchCard from "../components/LaunchCard";

const StyledLaunches = styled.div`
	background: ${ props => props.show ? "grey" : "lightblue"};
	position: relative;
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

`;

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
		const { show } = this.state
		const displayAllLaunches = allLaunches.map(launch => (
			<LaunchCard
				launchName={launch.mission_name}
				key={launch.id}
				showModal={this.showModal}
			/>
		));

		return launches ? (
			<StyledLaunches show={show}>
				{launches.error && <h2>{launches.error}</h2>}
				<Modal onClose={this.showModal} show={this.state.show}>
					Message in Modal
					<div class="content"><h1>Modal</h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.
					</div>
				</Modal>
				{launches && displayAllLaunches}
			</StyledLaunches>
		) : null;
	}
}

const mapStateToProps = state => ({
	launches: state.launches,
});

Launches = connect(mapStateToProps, { getLaunches }, null)(Launches);

export default Launches;
