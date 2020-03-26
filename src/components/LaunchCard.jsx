import React from "react";
import Button from "../styles/Button";
import styled from "styled-components";

const StyledCard = styled.div`
	display: flex; 
	width: 80%;
	background: pink;
	margin-bottom: 1rem;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
`;


const LaunchCard = ({ launchName, showModal, id }) => {
	
		return (
			<StyledCard>
				<div id="" className="" >
					{launchName}		
				</div>
				<Button onClick={e => {showModal(id)}}> 
					More info
				</Button>
			</StyledCard>
		)
	}

export default LaunchCard;
