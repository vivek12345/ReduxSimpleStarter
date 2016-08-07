import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchCityData } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}
	handleInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	handleFormSubmit(event) {
		event.preventDefault();
		this.props.fetchCityData(this.state.term);
		this.setState({
			term: ''
		});
	}
	render() {
		return (
			<form onSubmit={(event)=>this.handleFormSubmit(event)} className="input-group">
				<input
					className="form-control"
					placeholder="Get a 5 daya forecast in your favourite cities"
					value={this.state.term}
					onChange={(event)=>this.handleInputChange(event)} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchCityData}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
