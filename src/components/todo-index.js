import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, addPost, deletePost } from '../actions/index';
import _ from 'lodash';
import TodoItem from './todo-item';

class TodoIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
		this.state = {
			term: ''
		};
	}
	renderPosts() {
		return _.map(this.props.posts, (post, key) => {
			return <TodoItem key={key} id={key} value={post.title} handleDeleteClick={ () => this.props.deletePost(key) } />
		});
	}
	handleInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	handleButtonClick(event) {
		event.preventDefault();
		this.props.addPost({title: this.state.term });
		this.setState({
			term: ''
		});
	}
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Enter new title"
					className="input-group"
					value={this.state.term}
					onChange={(event) =>this.handleInputChange(event)} />
				<button
					type="button"
					className="btn btn-secondary"
					onClick={(event)=>this.handleButtonClick(event)}>Add New
				</button>
				{ this.renderPosts() }
			</div>
		)
	}
};
function mapStateToProps({ posts }) {
	return { posts };
}
export default connect(mapStateToProps, { fetchPosts, addPost, deletePost })(TodoIndex);
