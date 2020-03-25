import React from "react";
import { Link } from "react-router-dom";

// import Button from './Button'
// import { getSingleHistory } from '../actions/historyActions'


const Card = ({ page, launchName, eventDate, eventDescription, history_id, showModal }) => {
	
	if (page === "launch") {
		return (
			<>
				<div id="" className="" >
					{launchName}
					
					<button onClick={e => {showModal()}}> 
					show Modal
					</button>
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
