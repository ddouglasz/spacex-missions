import React from "react";
import { connect } from "react-redux";
import { getHistory } from "../actions/historyActions";
import HistoryCard from "../components/HistoryCard";
import styled from "styled-components";
import Loading from '../components/Loading'

const StyledHistory = styled.div`
	@media screen and (max-width: 736px) {
	
  }
	background: ${ props => props.show ? "grey" : "#0b0b0b"};
	color: #161c2d;
	position: relative;
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	color: #ffff;
	height: 90vh;

	.scroll {
	@media screen and (min-width: 736px) {
		width: 80%;
  }
    overflow: scroll;
    height: 78vh;
    top: 5rem;
    // width: 70%;
    
  }

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
		
		if(displayAllHistories.length === 0) {
			return <Loading />
		}

		return history ? (
			 <StyledHistory>
			  	{history.error && <h2>{history.error}</h2>}
			  	<div className="scroll" data-testid="history-scroll">
			  	{history && displayAllHistories}
			  	</div>
			  </StyledHistory>
    ) : null
	}
}

const mapStateToProps = state => ({
	history: state.history,
});

History = connect(mapStateToProps, { getHistory }, null)(History);

export default History;
