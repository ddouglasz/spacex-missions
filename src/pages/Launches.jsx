
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getLaunches, getSingleLaunch, getAllLaunchSearchAction } from "../actions/launchesActions";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
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


	 input[type="text" ] {
		padding: 6px;
		margin-top: 8px;
		height: 5vh;
		margin-bottom: 8px;
		font-size: 17px;
		border: none;
		outline: none;

	}
	
	.search-options {
		padding: 3px;
		margin-top: 8px;
		margin-bottom: 10px;
		font-size: 10px;
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
	
	.search-form {
		display: flex;
    flex-direction: column;
	}
	
	.scroll {
    overflow: scroll;
    height: 72vh;
    top: 5rem;
    /* text-align: center; */
    width: 70%;
    
  }


`;

class Launches extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			show: false,
			searchType: 'date',
			searchValue: ''
		};
	}
	
	handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  }

	showModal = id => {
		this.setState({
			show: !this.state.show,
		});
		this.props.getSingleLaunch(id);
		console.log(this.props.history)
	};

	componentDidMount() {
		this.props.getLaunches();
	}
	
	filterLaunches = (searchType,searchValue) => {
		const { launches } = this.props;
		return launches.filter((launch) => {
		if(searchType === 'date'){
		
			console.log('launch.mission_name = ', launch.mission_name.toLowerCase())
			console.log('launch_year = ', launch.launch_year)
			return launch.launch_year === searchValue;
		} 
			return launch.mission_name.toLowerCase().includes(searchValue.toLowerCase());
		});
	}

	render() {
	  const { show, searchValue, searchType } = this.state;
		const launches = this.props.launches;
		const allLaunches = searchValue ? this.filterLaunches(searchType,searchValue) : launches || [];
		const displayAllLaunches = allLaunches.map(launch => (
			<LaunchCard
				launchName={launch.mission_name}
				nationality={launch.rocket.second_stage.payloads[0].nationality}
				manufacturer={launch.rocket.second_stage.payloads[0].manufacturer}
				type={launch.rocket.second_stage.payloads[0].payload_type}
				key={launch.flight_number}
				id={launch.flight_number}
				showModal={this.showModal}
			/>
		));

		const { single_launch } = this.props;
		const LaunchDetail = single_launch ? single_launch : [];
		if(!launches) {
			return <Loading />
		}
		return launches ? (
			<StyledLaunches show={show}>
				<div className="search-container" ata-testid="search-container">
					<form className="search-form" onSubmit={this.onSearch}>
						<input type="text" placeholder="Search.." name="searchValue" value={this.state.searchValue} onChange={this.handleChange}  />
						<select className="search-options" id="mySelect" name="searchType" value={searchType} onChange={this.handleChange}>
							<option  value="date">Search by Mission Date</option>
							<option  value="name">Search by Mission Name</option>
						</select>
					</form>
				</div>
				{launches.error && <h2>{launches.error}</h2>}
				<Modal onClose={this.showModal} show={this.state.show}>
					Flight Number: {LaunchDetail.flight_number}
					<div className="content">
						<h1>Modal</h1>
						Mission Name: {LaunchDetail.mission_name}
						<div>Launch Year: {LaunchDetail.launch_year}</div>
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
	{ getLaunches, getSingleLaunch, getAllLaunchSearchAction },
	null,
)(Launches);

export default Launches;
