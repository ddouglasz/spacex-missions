import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";

const StyledCard = styled.div`
@media screen and (max-width: 736px) {
	display: block;
}
	display: flex;
	background: linear-gradient(45deg, #1f3059, #1b2a4e 40%, #243869);
	margin-bottom: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.decription {
		margin-bottom: 1rem;
	}

	.event-date {
		color: #239ad7;
	}
	
	.event-description {
		color: #239AD7;
	}
	
	#history-card-btn {
	@media screen and (max-width: 736px) {
    margin-top: 15px;
  }
	}
`;

const HistoryCard = ({ eventDate, eventDescription, history_id }) => {
	return (
		<StyledCard>
			<div >
				<div data-testid="history-card-description" className="decription">
					<strong className="event-description">Event description</strong>: {eventDescription}
				</div>
				<small data-testid="history-card-event-date"  className="event-date">
					{eventDate}
				</small>
			</div>
			<div data-testid="history-card-link-element" id="history-card-btn">
				<Link to={`/History/${history_id}`} id="">
					<Button>More Info</Button>
				</Link>
			</div>
		</StyledCard>
	);
};

export default HistoryCard;
