import React from "react";
import { Link } from "react-router-dom";

// import Button from './Button'
// import { getSingleHistory } from '../actions/historyActions'


const Card = ({ page, launchName, eventDate, eventDescription, history_id }) => {
	if (page === "launch") {
		return (
			<>
				<div id="" className="">
					{launchName}
				</div>
			</>
		);
	} else if (page === "history") {
		return (
			<>
				<div id="" className="">
        <strong>Event Date</strong>: {eventDate}
				</div>
				<div id="" className="">
				<strong>Event description</strong>: {eventDescription}
				</div>
				<div id="" className="">
				</div>
				<Link to={`/History/${history_id}`} id="">
					<strong>More Info</strong>
				</Link>
			</>
		);
	}
};

export default Card;
