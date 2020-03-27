import React from "react";
import { Link, Router } from 'react-router-dom';
import styled from 'styled-components'
import { withRouter } from "react-router-dom"

const StyledNavBar  = styled.div`
	display: flex;
	color: #fff;
	height: 10vh;
	/* background: #4b5256; */
	
	a {
		text-decoration: none;
	}
	
	h1 {
		color: #fff;
	}
	
	.nav {
		padding: 2rem;
		background-color: white;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	
	.history {
	background: ${({ route }) => route.split('/').includes("History") ? "#5476a3":  "linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869)" };

	}
	
	.launches {
	background: ${({ route }) => route.split('/').includes("Launches") ? "#5476a3": "linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869)"}
	}
	
	.company-name {
		color: #239AD7;
		margin-right: 10px;
	}
	
	
`;

const NavBar = (props) => {
	return (
		<StyledNavBar route={props.location.pathname} >
			<div data-testid="nav-elements" className="nav history" onClick={() => props.history.push("/History")}>
					<span><h1><span className="company-name">SPACE-X</span>  HISTORY</h1></span>
			</div>
			<div data-testid="nav-elements" className="nav launches" onClick={() => props.history.push("/Launches")}>
					<span><h1>LAUNCHES</h1></span>
			</div>
		</StyledNavBar>
	);
};

export default withRouter(NavBar);
