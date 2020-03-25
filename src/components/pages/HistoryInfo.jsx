import React from "react";
import { connect } from "react-redux";

import { getSingleHistory } from "../../actions/historyActions";

class HistoryInfo extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getSingleHistory(id);
	}

	render() {
		const history = this.props.single_history;
		const getHistory = history || {};

		return history ? (
			<>
				<div>Id: {getHistory.id}</div>
				<div>Title: {getHistory.title}</div>
				<div>Event Date: {getHistory.event_date_utc}</div>
				<div>Flight Number: {getHistory.flight_number}</div>
				<div>Details: {getHistory.details}</div>
				<h1>Links to further information</h1>
				<ul>
					<li>
						<a href={getHistory.reddit}>Reddit</a>
					</li>
					<li>
						<a href={getHistory.article}>Article</a>
					</li>
					<li>
						<a href={getHistory.links.wikipedia}>Wikipedia</a>
					</li>
				</ul>
			</>
		) : null;
	}
}

const mapStateToProps = state => ({
	single_history: state.single_history,
});

// export default HistoryInfo
export default connect(mapStateToProps, {
	getSingleHistory,
})(HistoryInfo);
