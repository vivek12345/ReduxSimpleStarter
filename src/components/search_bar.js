import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term : ''
		};
	}
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)}
				/>
				Value of the input field is: { this.state.term }
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term});
		this.props.onVideoSearch(term);
	}
}

export default SearchBar;
