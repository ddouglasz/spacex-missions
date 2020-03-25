import React from "react";
class Modal extends React.Component {
	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<>
				<div>{this.props.children}</div>
				<div>
					<button onClick={this.onClose}>
						Close
					</button>
				</div>
			</>
		);
	}
}

export default Modal;
