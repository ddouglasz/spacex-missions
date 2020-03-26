import React from "react";
import { connect } from "react-redux";
import { getHistory } from "../actions/historyActions";
import HistoryCard from "../components/HistoryCard";
import styled from "styled-components";


const StyledHistory = styled.div`
	background: ${ props => props.show ? "grey" : "lightblue"};
	position: relative;
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

`;


class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: false };
	}

	componentDidMount() {
		this.props.getHistory();
	}

	render() {
		const history = this.props.history;
		const allLhistory = history || [];
		const displayAllHistories = allLhistory.map(history => (
			<HistoryCard 
			eventDate={history.event_date_utc} 
			eventDescription={history.details} 
			history_id={history.id} 
			key={history.id}
			/>
		));

		return history ? (
			 <StyledHistory>
			  	{history.error && <h2>{history.error}</h2>}
			  	{history && displayAllHistories}
			  </StyledHistory>
    ) : null;
	}
}

const mapStateToProps = state => ({
	history: state.history,
});

History = connect(mapStateToProps, { getHistory }, null)(History);

export default History;
