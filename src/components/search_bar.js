import React from 'react';

class SearchBar extends React.Component {
	render() {
		return <input onChange={ this.handleInputChange } />
	}
	handleInputChange(event) {
		console.log(event);
	}
}

export default SearchBar;
