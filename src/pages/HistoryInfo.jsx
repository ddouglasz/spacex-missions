import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import Loading from '../components/Loading'


import { getSingleHistory } from "../actions/historyActions";


const StyledHistoryInfo = styled.div`
	background: #fff;
	height: 81vh;
	padding: 2rem 5rem;
	
	.history-info {
		margin: 5px;
	}
	
`

class HistoryInfo extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getSingleHistory(id);
	}

	render() {
		const history = this.props.single_history;
		const getHistory = history || [];
		
		if(getHistory.length === 0 ){
			return (<Loading />)
		}
		return history ? (
			<StyledHistoryInfo>
				<h1>History Information</h1>
				<div className="history-info"><strong>Id:</strong> {getHistory.id}</div>
				<div className="history-info"><strong>Title:</strong> {getHistory.title}</div>
				<div className="history-info"><strong>Event Date:</strong> {getHistory.event_date_utc}</div>
				<div className="history-info"><strong>Flight Number:</strong> {getHistory.flight_number}</div>
				<div className="history-info"><strong>Details:</strong> {getHistory.details}</div>
				<h1 className="history-info">Links to further information</h1>
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
