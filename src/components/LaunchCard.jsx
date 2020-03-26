import React from "react";
import Button from "../styles/Button";
import styled from "styled-components";

const StyledCard = styled.div`
	display: flex;
	background: linear-gradient(45deg, #1f3059, #1b2a4e 40%, #243869);
	margin-bottom: 1rem;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LaunchCard = ({ launchName, showModal, id }) => {
	return (
		<StyledCard>
			<div data-testid="launch-card-name" className="">
				{launchName}
			</div>
			<div data-testid="launch-card-modal-button">
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
