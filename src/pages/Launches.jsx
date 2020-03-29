
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getLaunches, getSingleLaunch, getAllLaunchSearchAction } from "../actions/launchesActions";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import LaunchCard from "../components/LaunchCard";

const StyledLaunches = styled.div`
	 @media screen and (max-width: 736px) {
		/* width: 100%; */
  }
	background: ${props => (props.show ? "grey" : "#0b0b0b")};
	color: #161c2d;
	position: relative;
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	color: #ffff;


	 .search-input {
		padding: 6px;
		margin-top: 8px;
		/* margin-bottom: 10px; */
		height: 5vh;
		font-size: 17px;
		border: none;
		outline: none;
		width: 20rem

	}
	
	.search-options {
	 @media screen and (max-width: 736px) {
    display: block;
    height: 5vh;
  }
		/* padding: 6px; */
		margin-top: 8px;
		/* margin-bottom: 10px; */
    /* height: 5vh; */
		padding-left: 6px;
		font-size: 17px;
		border: none;
		outline: none;
	  width: 141px;
    /* margin: 0; */
    /* padding-top: 6px; */

	}
	
	select {
  -webkit-appearance:none;
	-webkit-border-radius: 0px;
}


/* arrows */

select.search-options {
  background-image:
    linear-gradient(45deg, transparent 50%, blue 50%),
    linear-gradient(135deg, blue 50%, transparent 50%),
    linear-gradient(to right, skyblue, skyblue);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    3.5em 6.5em;
  background-repeat: no-repeat;
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
	 @media screen and (max-width: 736px) {
    display: block;
  }
	 margin: 25px;
	}
	
	.scroll {
	@media screen and (max-width: 736px) {
		width: 80%;
  }
    overflow: scroll;
    height: 72vh;
    top: 5rem;
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
						<input type="text" className="search-input" placeholder={this.state.searchType === 'date' ? 'YYYY' : 'Launch Name'} name="searchValue" value={this.state.searchValue} onChange={this.handleChange}  />
						<select className="search-options" id="mySelect" name="searchType" value={searchType} onChange={this.handleChange}>
							<option  value="date">Date</option>
							<option  value="name">Mission Name</option>
						</select>
					</form>
				</div>
				{launches.error && <h2>{launches.error}</h2>}
				<Modal onClose={this.showModal} show={this.state.show}>
				 <img src={LaunchDetail && LaunchDetail.links ? LaunchDetail.links.mission_patch_small : null} alt='loading...' />
					<div className="content">
					<div>
					<h2>Select information to share</h2>
						<input type="checkbox" data-testid="modal-input-elements" name="" value="" />
						<label >Flight Number: {LaunchDetail.flight_number}</label>
						<br />
						<input type="checkbox" data-testid="modal-input-elements" name="" value="" />
						<label >Mission Name: {LaunchDetail.mission_name}</label>
						<br />
						<input type="checkbox" data-testid="modal-input-elements" name="" value="" />
						<label > Launch Year: {LaunchDetail.launch_year}</label>
						<br />
						<br />
						</div>
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
