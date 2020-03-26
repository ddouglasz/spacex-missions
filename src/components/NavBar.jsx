import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledNavBar  = styled.div`
	display: flex;
	background: lightblue;
	
	a {
		text-decoration: none;
	}
	
	.nav {
		padding: 2rem;
		background: blue;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.history {
		background: lightgoldenrodyellow;


	}
	
	.launches {
		background: orange;

	}
	
	
`;

const NavBar = () => {
	return (
		<StyledNavBar>
			<div className="nav history">
				<Link to="/History" className="">
					<span>HISTORY PAGE</span>
				</Link>
			</div>
			<div className="nav launches">
				<Link to="/Launches" className="">
					<span>LAUNCH PAGE</span>
				</Link>
			</div>
		</StyledNavBar>
	);
};

export default NavBar;
