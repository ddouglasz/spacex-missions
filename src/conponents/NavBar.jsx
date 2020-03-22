import React from "react";
import { Link } from "react-router-dom";
//link to navigate

const NavBar = () => {
	return (
		<>
			<div id="" className="">
				<Link to="/History" className="">
					<span>HISTORY PAGE</span>
				</Link>
			</div>
			<div id="" className="">
				<Link to="/Launches" className="">
					<span>LAUNCH PAGE</span>
				</Link>
			</div>
		</>
	);
};

export default NavBar;
