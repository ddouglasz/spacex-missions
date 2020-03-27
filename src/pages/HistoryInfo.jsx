import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import Loading from '../components/Loading'


import { getSingleHistory } from "../actions/historyActions";


const StyledHistoryInfo = styled.div`
	background: #0b0b0b;
	color: #ffff;
	height: 85vh;
	padding: 2rem 5rem;
	
	
	#details-card {
    background: #1f3059;
    padding: 5px;
    margin: 5px;
	}
	
	#links-card {
    background: #1f3059;
    padding: 5px;
    margin: 5px;
	}
	
	.links a{
		color: #ffff;
	}
	
	.history-info {
		margin: 10px;
	}
	
	.item-label {
	color: #239AD7;
	}
	
`

class HistoryInfo extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getSingleHistory(id);
	}

	render() {
		const history = this.props.single_history;
		const getHistory = history || {};
		
		if(!getHistory){
			return (<Loading />)
		}
		return history ? (
			<StyledHistoryInfo data-testid="styledHistoryElement">
				<div id="details-card">
				<h1>History Information</h1>
				<div className="history-info" data-testid="history-info-elements"><strong className="item-label">Id:</strong> {getHistory.id}</div>
				<div className="history-info" data-testid="history-info-elements"><strong className="item-label">Title:</strong> {getHistory.title}</div>
				<div className="history-info" data-testid="history-info-elements"><strong className="item-label">Event Date:</strong> {getHistory.event_date_utc}</div>
				<div className="history-info" data-testid="history-info-elements"><strong className="item-label">Flight Number:</strong> {getHistory.flight_number}</div>
				<div className="history-info" data-testid="history-info-elements"><strong className="item-label">Details:</strong> {getHistory.details}</div>
				</div>
				<div id="links-card">
				<h1 className="" data-testid="history-info-elements">Links to further information</h1>
				<div>
				<ul>
					<li className="links">
						<a href={getHistory.links.reddit}>Reddit</a>
					</li>
					<li className="links">
						<a href={getHistory.links.article}>Article</a>
					</li>
					<li className="links">
						<a href={getHistory.links.wikipedia}>Wikipedia</a>
					</li>
				</ul>
				</div>
				</div>
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
