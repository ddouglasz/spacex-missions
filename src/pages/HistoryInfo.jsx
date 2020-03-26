import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'


import { getSingleHistory } from "../actions/historyActions";


const StyledHistoryInfo = styled.div`
	background: lightblue;
	height: 81vh;
	padding: 2rem 5rem;
	
`

class HistoryInfo extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getSingleHistory(id);
	}

	render() {
		const history = this.props.single_history;
		const getHistory = history || {};

		return history ? (
			<StyledHistoryInfo>
				<div>Id: {getHistory.id}</div>
				<div>Title: {getHistory.title}</div>
				<div>Event Date: {getHistory.event_date_utc}</div>
				<div>Flight Number: {getHistory.flight_number}</div>
				<div>Details: {getHistory.details}</div>
				<h1>Links to further information</h1>
				<ul>
					<li>
						<a href={getHistory.links.reddit}>Reddit</a>
					</li>
					<li>
						<a href={getHistory.links.article}>Article</a>
					</li>
					<li>
						<a href={getHistory.links.wikipedia}>Wikipedia</a>
					</li>
				</ul>
			</StyledHistoryInfo>
		) : null;
	}
}

const mapStateToProps = state => ({
	single_history: state.single_history,
});

export default connect(mapStateToProps, {
	getSingleHistory,
})(HistoryInfo);
