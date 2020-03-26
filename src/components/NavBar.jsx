import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledNavBar  = styled.div`
	display: flex;
	color: #fff;
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
	
	
`;

const NavBar = () => {
	return (
		<StyledNavBar>
			<div data-testid="nav-elements" className="nav history">
				<Link to="/History" className="">
					<span><h1>HISTORY PAGE</h1></span>
				</Link>
			</div>
			<div data-testid="nav-elements" className="nav launches">
				<Link to="/Launches" className="">
					<span><h1>LAUNCH PAGE</h1></span>
				</Link>
			</div>
		</StyledNavBar>
	);
};

export default NavBar;
