import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Button from "../styles/Button";

// import Button from './Button'
// import { getSingleHistory } from '../actions/historyActions'

const StyledCard = styled.div`
	display: flex; 
	width: 80%;
	background: pink;
	margin-bottom: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* align-items: center; */
	
	
	.decription {
		margin-bottom: 1rem;
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
			<small id="" className="">
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
