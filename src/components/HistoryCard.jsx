import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Button from "../styles/Button";


const StyledCard = styled.div`
	display: flex; 
	background: linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869);
	margin-bottom: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* align-items: center; */
	
	
	.decription {
		margin-bottom: 1rem;
	}
	
	.event-date {
		color: #239AD7;
	}
	
`;

const HistoryCard = ({
	eventDate,
	eventDescription,
	history_id,
}) => {
	return (
		<StyledCard>
			<div >
			<div className="decription">
				<strong>Event description</strong>: {eventDescription}
			</div>
			<small id="" className="event-date">
				{eventDate}
			</small>
			<div id="" className=""></div>
			</div>
			<Link to={`/History/${history_id}`} id="">
				<Button>More Info</Button>
			</Link>
		</StyledCard>
	);
};

export default HistoryCard;
