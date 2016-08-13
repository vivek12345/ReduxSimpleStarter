import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<span>{this.props.value}</span>
				<button
					className="btn btn-danger"
					onClick={ () => this.props.handleDeleteClick() }>Delete
				</button>
			</div>
		);
	}
}
