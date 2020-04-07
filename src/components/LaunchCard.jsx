import React from "react";
import Button from "../styles/Button";
import styled from "styled-components";

const StyledCard = styled.div`
	display: flex;
	@media screen and (max-width: 736px) {
    display: flow-root;
    /* height: auto; */
    /* justify-content: space-evenly; */
  }
	background: linear-gradient(45deg, #1f3059, #1b2a4e 40%, #243869);
	margin-bottom: 1rem;
	padding: 1rem;
	justify-content: space-between;
	align-items: baseline;
	
	#launch-card-modal-btn {
	@media screen and (max-width: 736px) {
		margin-left: 10px;
    margin-top: 15px;
  }
	}
	
	.launch-data {
		margin: 10px;
	}
	
	.spacing {
		padding-top: 5px;
		padding-bottom: 5px;
	}
	
	strong {
		color: #239AD7;
	}
`;

const LaunchCard = ({ launchName, nationality, manufacturer, type,  showModal, id }) => {
	return (
		<StyledCard>
		<div className="launch-data">
			<div data-testid="launch-card-name" className="spacing">
				<strong>Launch Name:</strong> {launchName}
			</div>
			<div data-testid="payload-nationality" className="spacing">
			<strong>Payload Nationality:</strong> {nationality}
			</div>
			<div data-testid="payload-manufacturer" className="spacing">
			<strong>Payload Manufaturer:</strong> {manufacturer}
			</div>
			<div data-testid="payload-type" className="spacing">
			<strong>Payload Type:</strong> {type}
			</div>
			</div>
			<div data-testid="launch-card-modal-btn" id="launch-card-modal-btn">
				<Button
					onClick={() => {
						showModal(id);
					}}
				>
					More Info
				</Button>
			</div>
		</StyledCard>
	);
};

export default LaunchCard;
