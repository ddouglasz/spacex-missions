import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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
		background: linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869);

	}
	
	.launches {
		background: linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869);
	}
	
	.company-name {
		color: #239AD7;
		margin-right: 10px;
	}
	
	
`;

const NavBar = () => {
	return (
		<StyledNavBar>
			<div data-testid="nav-elements" className="nav history">
				<Link to="/History" className="">
					<span><h1><span className="company-name">SPACE-X</span>  HISTORY</h1></span>
				</Link>
			</div>
			<div data-testid="nav-elements" className="nav launches">
				<Link to="/Launches" className="">
					<span><h1>LAUNCHES</h1></span>
				</Link>
			</div>
		</StyledNavBar>
	);
};

export default NavBar;
