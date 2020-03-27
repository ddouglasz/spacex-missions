import React from "react";
import styled from "styled-components";
import Button from '../styles/Button'
// import svg from '../assets/down-arrow.svg'

const StyledModal = styled.div`
	position: fixed;
	background: #fff;
	width: 100%;
	height: 100%;
	margin: auto;
	left: 0;
	top: 0;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, .5);

	.inner {
		padding: 1rem;
		border-radius: 1rem;
		background: linear-gradient(45deg,#1f3059,#1b2a4e 40%,#243869);
		width: 30rem;
		/* opacity: 1; */
	}
	
	.send-btn {
		display: flex;
    justify-content: flex-end;
	}
	
	#cancel-btn {
		color: #239AD7;
		background-color: inherit !important;
		display: flex;
    justify-content: flex-end;
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
				<div  data-testid="modal-container" className="inner">
				<div id="cancel-btn">
						<Button className="toggle-button" onClick={this.onClose} data-testid="close-modal-button" >
						Close
						</Button>
				</div>
					<div>
					<h2>Launch Information</h2>
					<div>{this.props.children}</div>
					</div>
						<div className="send-btn">
						<Button type="submit" onClick={this.onClose} data-testid="modal-send-button" >Send</Button>
						</div>
				</div>
			</StyledModal>
		);
	}
}

export default Modal;
