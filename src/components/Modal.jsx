import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
	position: fixed;
	background: #fff;
	width: 100%;
	height: 100%;
	margin: auto;
	left: 0;
	top: 0;
	z-index: 1;
	background: #000;
	opacity: 0.85;
	display: flex;
	justify-content: center;
	align-items: center;

	.inner {
		padding: 1rem;
		border-radius: 1rem;
		background: linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869);
		width: 30rem;
		opacity: 1;
	}
`;

class Modal extends React.Component {
	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	};

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<StyledModal>
				<div className="inner">
					<h2>Modal Window</h2>
					<div>{this.props.children}</div>
					<div>
						<h1>Select information to share</h1>
						<input type="checkbox" id="" name="" value="" />
						<label for="">Jesus</label>
						<br />
						<input type="checkbox" id="" name="" value="" />
						<label for=""> {}</label>
						<br />
						<input type="checkbox" id="" name="" value="" />
						<label for="vehicle3"> {}</label>
						<br />
						<br />
						<input type="submit" value="Send" />
						
						<button className="toggle-button" onClick={this.onClose}>
							close
						</button>
					</div>
				</div>
			</StyledModal>
		);
	}
}

export default Modal;
