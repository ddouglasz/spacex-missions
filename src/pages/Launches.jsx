// import React from 'react'
// import Button from '../Button'
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getLaunches, getSingleLaunch } from "../actions/launchesActions";
import Modal from "../components/Modal";
import LaunchCard from "../components/LaunchCard";

const StyledLaunches = styled.div`
	background: ${props => (props.show ? "grey" : "#0b0b0b")};
	color: #161c2d;
	position: relative;
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	color: #ffff;


	.search-options, input[type="text" ] {
		padding: 6px;
		margin-top: 8px;
		margin-bottom: 8px;
		font-size: 17px;
		border: none;
		outline: none;

	}
	
 .search-options {
		height: 4vh;
	}

	.search-container button {
		float: right;
		padding: 6px 10px;
		margin-top: 8px;
		margin-bottom: 8px;
		margin-right: 16px;
		background: #ddd;
		font-size: 17px;
		border: none;
		cursor: pointer;
	}
	
	.scroll {
    overflow: scroll;
    height: 72vh;
    top: 5rem;
    text-align: center;
    width: 70%;
    
  }
`;

class Launches extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			show: false,
		};
	}

	showModal = id => {
		this.setState({
			show: !this.state.show,
		});
		this.props.getSingleLaunch(id);
	};

	componentDidMount() {
		this.props.getLaunches();
	}

	render() {
		const launches = this.props.launches;
		const allLaunches = launches || [];
		const { show } = this.state;
		const displayAllLaunches = allLaunches.map(launch => (
			<LaunchCard
				launchName={launch.mission_name}
				key={launch.flight_number}
				id={launch.flight_number}
				showModal={this.showModal}
			/>
		));

		const { single_launch } = this.props;
		const LaunchDetail = single_launch ? single_launch : [];

		return launches ? (
			<StyledLaunches show={show}>
				<div className="search-container">
					<form action="">
						<select id="" className="search-options">
							<option value="date">Search by Date</option>
							<option value="name">Search by name</option>
						</select>
						<input type="text" placeholder="Search.." name="search" />
						<button type="submit">
							<i className="fa fa-search"></i>
						</button>
					</form>
				</div>
				{launches.error && <h2>{launches.error}</h2>}
				<Modal onClose={this.showModal} show={this.state.show}>
					Flight Number: {LaunchDetail.flight_number}
					<div className="content">
						<h1>Modal</h1>
						mission_name: {LaunchDetail.mission_name}
					</div>
				</Modal>
				<div className="scroll">
				{launches && displayAllLaunches}
				</div>
			</StyledLaunches>
		) : null;
	}
}

const mapStateToProps = state => ({
	launches: state.launches,
	single_launch: state.single_launch,
});

Launches = connect(
	mapStateToProps,
	{ getLaunches, getSingleLaunch },
	null,
)(Launches);

export default Launches;
