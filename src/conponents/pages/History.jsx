import React from "react";
import { connect } from "react-redux";
import { getHistory } from "../../actions/historyActions";
import Card from "../Card";

class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: false };
	}

	componentDidMount() {
		this.props.getHistory();
	}

	render() {
		const history = this.props.history;
		const allLhistory = history || [];
		const displayAllHistories = allLhistory.map(history => (
			<Card launchTitle={history.title} />
		));

		return history ? (
			 <div>
			  	{history.error && <h2>{history.error}</h2>}
			  	{history && displayAllHistories}
			  	{console.log(history)}
			  </div>
    ) : null;
	}
}

const mapStateToProps = state => ({
	history: state.history,
});

History = connect(mapStateToProps, { getHistory }, null)(History);

export default History;
